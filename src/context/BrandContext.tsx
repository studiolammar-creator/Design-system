/* ─────────────────────────────────────────────────────────
   Brand Context — SL Design System
   Manages brand configuration and applies it to CSS custom
   properties at runtime, enabling multi-brand theming.
   ───────────────────────────────────────────────────────── */

import React, {
  createContext, useContext, useState, useCallback, useEffect,
} from 'react';
import { generateTonalScale, hexToHslString, isValidHex } from '@/lib/color-scale';

/* ── Types ──────────────────────────────────────────────── */

export type BrandConfig = {
  /** Base HEX color — used as the 500 anchor for tonal scale generation */
  primary:   string;
  secondary: string;
  accent:    string;
  fontSans:  string;
  fontMono:  string;
};

export type BrandPreset = {
  id:          string;
  name:        string;
  description: string;
  config:      BrandConfig;
};

/* ── Presets ─────────────────────────────────────────────── */

export const BRAND_PRESETS: BrandPreset[] = [
  {
    id:          'obra-original',
    name:        'OBRA Original',
    description: 'Forest green · golden yellow · mint teal',
    config: {
      primary:   '#1E8F72',
      secondary: '#FFC220',
      accent:    '#3BB688',
      fontSans:  'Sharphy',
      fontMono:  'Space Mono',
    },
  },
  {
    id:          'white-label',
    name:        'White Label',
    description: 'Neutral · brand-agnostic base',
    config: {
      primary:   '#525252',
      secondary: '#A3A3A3',
      accent:    '#737373',
      fontSans:  'Inter',
      fontMono:  'Space Mono',
    },
  },
  {
    id:          'brand-ocean',
    name:        'Brand Ocean',
    description: 'Blue · orange · teal',
    config: {
      primary:   '#0055FF',
      secondary: '#FF6600',
      accent:    '#00AA88',
      fontSans:  'Inter',
      fontMono:  'Space Mono',
    },
  },
  {
    id:          'brand-violet',
    name:        'Brand Violet',
    description: 'Violet · amber · emerald',
    config: {
      primary:   '#7C3AED',
      secondary: '#F59E0B',
      accent:    '#10B981',
      fontSans:  'Poppins',
      fontMono:  'JetBrains Mono',
    },
  },
];

/* ── Context shape ───────────────────────────────────────── */

type BrandContextType = {
  config:        BrandConfig;
  activePreset:  string | null;
  setConfig:     (c: BrandConfig) => void;
  applyPreset:   (id: string) => void;
  updateColor:   (key: 'primary' | 'secondary' | 'accent', hex: string) => void;
  updateFont:    (key: 'fontSans' | 'fontMono', value: string) => void;
  getPrimaryScale:   () => Record<string, string>;
  getSecondaryScale: () => Record<string, string>;
  getAccentScale:    () => Record<string, string>;
};

const BrandContext = createContext<BrandContextType | null>(null);

/* ── Google Fonts loader ─────────────────────────────────── */

const SYSTEM_FONTS = new Set([
  'Sharphy', 'Space Mono', 'system-ui', 'sans-serif', 'monospace',
  'ui-sans-serif', 'ui-monospace', 'Arial', 'Helvetica',
  'Georgia', 'Times New Roman', 'Courier New',
]);

function loadGoogleFont(fontName: string) {
  if (SYSTEM_FONTS.has(fontName)) return;
  const id = `gfont-${fontName.replace(/\s+/g, '-').toLowerCase()}`;
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id   = id;
  link.rel  = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}:wght@300;400;500;600;700;800&display=swap`;
  document.head.appendChild(link);
}

/* ── CSS var applicator ──────────────────────────────────── */

export function applyBrandThemeToDom(config: BrandConfig, dark: boolean) {
  if (
    !isValidHex(config.primary) ||
    !isValidHex(config.secondary) ||
    !isValidHex(config.accent)
  ) return;

  const root = document.documentElement;
  const ps   = generateTonalScale(config.primary);
  const ss   = generateTonalScale(config.secondary);
  const as_  = generateTonalScale(config.accent);

  if (dark) {
    /* Dark mode — lighter shades as "primary" */
    root.style.setProperty('--primary',              hexToHslString(ps['300']));
    root.style.setProperty('--primary-foreground',   hexToHslString(ps['950']));
    root.style.setProperty('--secondary',            hexToHslString(ss['300']));
    root.style.setProperty('--secondary-foreground', hexToHslString(ss['900']));
    root.style.setProperty('--accent',               hexToHslString(as_['400']));
    root.style.setProperty('--accent-foreground',    hexToHslString(as_['950']));
    root.style.setProperty('--ring',                 hexToHslString(ps['400']));
    root.style.setProperty('--sidebar-primary',             hexToHslString(ps['300']));
    root.style.setProperty('--sidebar-primary-foreground',  hexToHslString(ps['950']));
    root.style.setProperty('--sidebar-ring',                hexToHslString(ps['400']));
  } else {
    /* Light mode — darker shades as "primary" */
    root.style.setProperty('--primary',              hexToHslString(ps['900']));
    root.style.setProperty('--primary-foreground',   hexToHslString(ps['50']));
    root.style.setProperty('--secondary',            hexToHslString(ss['400']));
    root.style.setProperty('--secondary-foreground', hexToHslString(ss['900']));
    root.style.setProperty('--accent',               hexToHslString(as_['400']));
    root.style.setProperty('--accent-foreground',    hexToHslString(as_['900']));
    root.style.setProperty('--ring',                 hexToHslString(ps['900']));
    root.style.setProperty('--sidebar-primary',             hexToHslString(ps['700']));
    root.style.setProperty('--sidebar-primary-foreground',  hexToHslString(ps['50']));
    root.style.setProperty('--sidebar-ring',                hexToHslString(ps['700']));
  }

  /* Typography */
  loadGoogleFont(config.fontSans);
  loadGoogleFont(config.fontMono);
  /* --font-sans / --font-mono contain just the font name.
     Tailwind config appends system fallbacks via var(--font-sans). */
  root.style.setProperty('--font-sans', `"${config.fontSans}"`);
  root.style.setProperty('--font-mono', `"${config.fontMono}"`);
}

/* ── Provider ────────────────────────────────────────────── */

export function BrandProvider({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark: boolean;
}) {
  const [config, setConfigState] = useState<BrandConfig>(
    BRAND_PRESETS[0].config,
  );
  const [activePreset, setActivePreset] = useState<string | null>(
    BRAND_PRESETS[0].id,
  );

  /* Apply on mount */
  useEffect(() => {
    applyBrandThemeToDom(config, dark);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* Re-apply when dark mode flips */
  useEffect(() => {
    applyBrandThemeToDom(config, dark);
  }, [dark]); // eslint-disable-line react-hooks/exhaustive-deps

  const applyAndSet = useCallback(
    (newConfig: BrandConfig) => {
      applyBrandThemeToDom(newConfig, dark);
      setConfigState(newConfig);
    },
    [dark],
  );

  const setConfig = useCallback(
    (c: BrandConfig) => {
      setActivePreset(null);
      applyAndSet(c);
    },
    [applyAndSet],
  );

  const applyPreset = useCallback(
    (id: string) => {
      const preset = BRAND_PRESETS.find((p) => p.id === id);
      if (!preset) return;
      setActivePreset(id);
      applyAndSet(preset.config);
    },
    [applyAndSet],
  );

  const updateColor = useCallback(
    (key: 'primary' | 'secondary' | 'accent', hex: string) => {
      const next = { ...config, [key]: hex };
      setActivePreset(null);
      applyAndSet(next);
    },
    [config, applyAndSet],
  );

  const updateFont = useCallback(
    (key: 'fontSans' | 'fontMono', value: string) => {
      const next = { ...config, [key]: value };
      setActivePreset(null);
      applyAndSet(next);
    },
    [config, applyAndSet],
  );

  const getPrimaryScale   = useCallback(() => generateTonalScale(config.primary),   [config.primary]);
  const getSecondaryScale = useCallback(() => generateTonalScale(config.secondary), [config.secondary]);
  const getAccentScale    = useCallback(() => generateTonalScale(config.accent),    [config.accent]);

  return (
    <BrandContext.Provider
      value={{
        config,
        activePreset,
        setConfig,
        applyPreset,
        updateColor,
        updateFont,
        getPrimaryScale,
        getSecondaryScale,
        getAccentScale,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
}

/* ── Hook ────────────────────────────────────────────────── */

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error('useBrand must be used within <BrandProvider>');
  return ctx;
}

/* ── Font options for the UI ─────────────────────────────── */

export const SANS_FONTS = [
  'Sharphy', 'Inter', 'Roboto', 'Open Sans', 'Poppins',
  'Montserrat', 'Lato', 'DM Sans', 'Outfit', 'Nunito',
  'Raleway', 'Playfair Display',
];

export const MONO_FONTS = [
  'Space Mono', 'JetBrains Mono', 'Fira Code',
  'Source Code Pro', 'IBM Plex Mono', 'Roboto Mono',
];
