#!/usr/bin/env node
/**
 * push-figma-variables.js
 * Reads tokens.json and creates all design tokens as Figma Variables
 * via the Figma REST API (PATCH /v1/files/:fileKey/variables).
 *
 * Usage:
 *   FIGMA_TOKEN=<your-personal-access-token> node scripts/push-figma-variables.js
 *
 * Get your token at: Figma → Settings → Security → Personal access tokens
 * Required scopes: File content (read) + Variables (read & write)
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// ── Config ─────────────────────────────────────────────────────────────────
const FILE_KEY   = 'Pa10O4NTaU3tKf3whoQoWV';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
if (!FIGMA_TOKEN) {
  console.error('❌  FIGMA_TOKEN environment variable is not set.');
  console.error('    Get yours at: Figma → Settings → Security → Personal access tokens');
  console.error('    Required scopes: File content (read) + Variables (read & write)');
  process.exit(1);
}

const tokens = JSON.parse(readFileSync(join(root, 'tokens.json'), 'utf-8'));

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Convert a hex color (#RRGGBB or #RRGGBBAA) to Figma RGBA (0–1 floats). */
function hexToFigmaColor(hex) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const a = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
  return { r, g, b, a };
}

/** Round to 4 decimal places for cleaner Figma values. */
const r4 = (n) => Math.round(n * 10000) / 10000;

function hexToFigmaColorRounded(hex) {
  const c = hexToFigmaColor(hex);
  return { r: r4(c.r), g: r4(c.g), b: r4(c.b), a: r4(c.a) };
}

// ── ID generators (Figma temp IDs must start with a digit after the prefix) ─
let _id = 1;
const uid = (prefix) => `${prefix}_${_id++}`;

// ── Payload accumulators ─────────────────────────────────────────────────────
const variableCollections = [];
const variableModes       = [];
const variables           = [];
const variableModeValues  = [];

/** Create a collection with one or more mode names. Returns { colId, modeIds[] }. */
function addCollection(name, modeNames) {
  const colId = uid('col');
  const firstModeId = uid('mode');
  variableCollections.push({
    action: 'CREATE',
    id: colId,
    name,
    initialModeId: firstModeId,
  });
  const modeIds = [firstModeId];
  variableModes.push({ action: 'CREATE', id: firstModeId, variableCollectionId: colId, name: modeNames[0] });

  for (let i = 1; i < modeNames.length; i++) {
    const mId = uid('mode');
    modeIds.push(mId);
    variableModes.push({ action: 'CREATE', id: mId, variableCollectionId: colId, name: modeNames[i] });
  }
  return { colId, modeIds };
}

/** Register a variable and return its tempId. */
function addVariable(name, colId, resolvedType) {
  const varId = uid('var');
  variables.push({ action: 'CREATE', id: varId, name, variableCollectionId: colId, resolvedType });
  return varId;
}

/** Set a raw value for a variable in a mode. */
function setColorValue(varId, modeId, hex) {
  variableModeValues.push({ variableId: varId, modeId, value: hexToFigmaColorRounded(hex) });
}
function setFloatValue(varId, modeId, num) {
  variableModeValues.push({ variableId: varId, modeId, value: Number(num) });
}
function setAliasValue(varId, modeId, aliasVarId) {
  variableModeValues.push({ variableId: varId, modeId, value: { type: 'VARIABLE_ALIAS', id: aliasVarId } });
}

// ════════════════════════════════════════════════════════════════════════════
// 1. PRIMITIVES / COLORS
// ════════════════════════════════════════════════════════════════════════════
const { colId: colColors, modeIds: [modeColors] } = addCollection('Primitives / Colors', ['Value']);

const colorVarIds = {}; // map "primary/50" → varId
const colors = tokens['primitives/colors'];

// Palettes
const palettes = ['primary', 'secondary', 'intense', 'neutral', 'destructive', 'success', 'info'];
for (const palette of palettes) {
  const pal = colors[palette];
  if (!pal) continue;
  for (const [shade, token] of Object.entries(pal)) {
    const name  = `${palette}/${shade}`;
    const varId = addVariable(name, colColors, 'COLOR');
    colorVarIds[`${palette}.${shade}`] = varId;
    setColorValue(varId, modeColors, token.value);
  }
}

// White / Black
if (colors.white) {
  const varId = addVariable('white', colColors, 'COLOR');
  colorVarIds['white'] = varId;
  setColorValue(varId, modeColors, colors.white.value);
}
if (colors.black) {
  const varId = addVariable('black', colColors, 'COLOR');
  colorVarIds['black'] = varId;
  setColorValue(varId, modeColors, colors.black.value);
}

// ════════════════════════════════════════════════════════════════════════════
// 2. PRIMITIVES / SPACING
// ════════════════════════════════════════════════════════════════════════════
const { colId: colSpacing, modeIds: [modeSpacing] } = addCollection('Primitives / Spacing', ['Value']);

const spacing = tokens['primitives/spacing'];
for (const [key, token] of Object.entries(spacing)) {
  const varId = addVariable(`spacing/${key}`, colSpacing, 'FLOAT');
  setFloatValue(varId, modeSpacing, token.value);
}

// ════════════════════════════════════════════════════════════════════════════
// 3. PRIMITIVES / RADIUS
// ════════════════════════════════════════════════════════════════════════════
const { colId: colRadius, modeIds: [modeRadius] } = addCollection('Primitives / Radius', ['Value']);

const radiusVarIds = {};
const radius = tokens['primitives/radius'];
for (const [key, token] of Object.entries(radius)) {
  const varId = addVariable(`radius/${key}`, colRadius, 'FLOAT');
  radiusVarIds[key] = varId;
  setFloatValue(varId, modeRadius, token.value);
}

// ════════════════════════════════════════════════════════════════════════════
// 4. PRIMITIVES / TYPOGRAPHY (font sizes + font weights)
// ════════════════════════════════════════════════════════════════════════════
const { colId: colType, modeIds: [modeType] } = addCollection('Primitives / Typography', ['Value']);

const typo = tokens['primitives/typography'];
for (const [size, token] of Object.entries(typo.fontSize || {})) {
  const varId = addVariable(`fontSize/${size}`, colType, 'FLOAT');
  setFloatValue(varId, modeType, token.value);
}
for (const [weight, token] of Object.entries(typo.fontWeight || {})) {
  const varId = addVariable(`fontWeight/${weight}`, colType, 'FLOAT');
  setFloatValue(varId, modeType, token.value);
}

// ════════════════════════════════════════════════════════════════════════════
// 4b. PRIMITIVES / SHADOWS (STRING variables)
// ════════════════════════════════════════════════════════════════════════════
const { colId: colShadow, modeIds: [modeShadow] } = addCollection('Primitives / Shadows', ['Value']);

const shadowVarIds = {};
const shadows = tokens['primitives/shadow'] || {};
for (const [name, token] of Object.entries(shadows)) {
  if (name === 'none') continue;
  const varName = name === 'DEFAULT' ? 'shadow' : `shadow-${name}`;
  const varId = addVariable(varName, colShadow, 'STRING');
  shadowVarIds[name] = varId;
  variableModeValues.push({ variableId: varId, modeId: modeShadow, value: token.value });
}

// ════════════════════════════════════════════════════════════════════════════
// 5. SEMANTIC — 2 modes: Light / Dark
// ════════════════════════════════════════════════════════════════════════════
const { colId: colSemantic, modeIds: [modeLight, modeDark] } =
  addCollection('Semantic', ['Light', 'Dark']);

/** Resolve a Tokens Studio reference like "{primitives/colors.primary.900}" to a colorVarId. */
function resolveColorRef(val) {
  // e.g. "{primitives/colors.primary.900}" → "primary.900"
  const match = val.match(/^\{primitives\/colors\.(.+)\}$/);
  if (!match) return null;
  return colorVarIds[match[1]] ?? null;
}

const semLight = tokens['semantic/light']?.color || {};
const semDark  = tokens['semantic/dark']?.color  || {};

// Collect all semantic color names (union of light + dark)
const semNames = [...new Set([...Object.keys(semLight), ...Object.keys(semDark)])];

for (const name of semNames) {
  const varId = addVariable(`color/${name}`, colSemantic, 'COLOR');

  // Light mode
  const lightToken = semLight[name];
  if (lightToken) {
    const refId = resolveColorRef(lightToken.value);
    if (refId) {
      setAliasValue(varId, modeLight, refId);
    } else {
      // Raw hex fallback
      setColorValue(varId, modeLight, lightToken.value);
    }
  }

  // Dark mode
  const darkToken = semDark[name];
  if (darkToken) {
    const refId = resolveColorRef(darkToken.value);
    if (refId) {
      setAliasValue(varId, modeDark, refId);
    } else {
      setColorValue(varId, modeDark, darkToken.value);
    }
  }
}

// ════════════════════════════════════════════════════════════════════════════
// 5b. SEMANTIC RADIUS (sm/md/lg → aliases to primitives)
// ════════════════════════════════════════════════════════════════════════════
const semRadius = tokens['semantic/light']?.radius || {};
for (const [name, token] of Object.entries(semRadius)) {
  const varId = addVariable(`radius/${name}`, colSemantic, 'FLOAT');
  // Resolve alias e.g. "{primitives/radius.md}" → radiusVarIds["md"]
  const match = token.value.match(/^\{primitives\/radius\.(.+)\}$/);
  const aliasId = match ? (radiusVarIds[match[1]] ?? null) : null;

  if (aliasId) {
    setAliasValue(varId, modeLight, aliasId);
    setAliasValue(varId, modeDark, aliasId); // same radius in dark
  } else {
    setFloatValue(varId, modeLight, token.value);
    setFloatValue(varId, modeDark, token.value);
  }
}

// ════════════════════════════════════════════════════════════════════════════
// 6. POST to Figma API
// ════════════════════════════════════════════════════════════════════════════
const payload = { variableCollections, variableModes, variables, variableModeValues };

console.log(`\n📦  Collections : ${variableCollections.length}`);
console.log(`🗂   Modes       : ${variableModes.length}`);
console.log(`🔑  Variables   : ${variables.length}`);
console.log(`🎨  Mode values : ${variableModeValues.length}`);
console.log(`\n⬆️   Pushing to Figma file ${FILE_KEY}…\n`);

const res = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}/variables`, {
  method: 'POST',
  headers: {
    'X-FIGMA-TOKEN': FIGMA_TOKEN,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
});

const json = await res.json();

if (!res.ok) {
  console.error('❌  Figma API error:', res.status, res.statusText);
  console.error(JSON.stringify(json, null, 2));
  process.exit(1);
}

console.log('✅  Variables created successfully!');
console.log(`🔗  Open: https://www.figma.com/design/${FILE_KEY}`);
if (json.meta) {
  const created = Object.keys(json.meta.variables ?? {}).length;
  console.log(`    ${created} variables created in Figma.`);
}
