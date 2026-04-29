/* ─────────────────────────────────────────────────────────
   Color Scale Utilities — SL Design System
   Pure functions for HEX / RGB / HSL conversion and
   tonal scale generation. No external dependencies.
   ───────────────────────────────────────────────────────── */

export function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '').padEnd(6, '0').slice(0, 6);
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
  ];
}

export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  return (
    '#' +
    [clamp(r), clamp(g), clamp(b)]
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()
  );
}

export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

/**
 * Returns an HSL triplet string in ShadCN format: "H S% L%"
 * (used as the value of CSS custom properties like --primary)
 */
export function hexToHslString(hex: string): string {
  const [r, g, b] = hexToRgb(hex);
  const [h, s, l] = rgbToHsl(r, g, b);
  return `${h} ${s}% ${l}%`;
}

/** Mix base toward target: ratio 0 = base, ratio 1 = target */
function mixHex(base: string, target: string, ratio: number): string {
  const [r1, g1, b1] = hexToRgb(base);
  const [r2, g2, b2] = hexToRgb(target);
  return rgbToHex(
    r1 + (r2 - r1) * ratio,
    g1 + (g2 - g1) * ratio,
    b1 + (b2 - b1) * ratio,
  );
}

/**
 * Generate an 11-step tonal scale (50 → 950) from a base HEX.
 * The input is treated as the 500 anchor (mid-tone).
 */
export function generateTonalScale(baseHex: string): Record<string, string> {
  const WHITE = '#FFFFFF';
  const BLACK = '#000000';
  return {
    '50':  mixHex(baseHex, WHITE, 0.95),
    '100': mixHex(baseHex, WHITE, 0.88),
    '200': mixHex(baseHex, WHITE, 0.75),
    '300': mixHex(baseHex, WHITE, 0.58),
    '400': mixHex(baseHex, WHITE, 0.35),
    '500': baseHex.toUpperCase(),
    '600': mixHex(baseHex, BLACK, 0.18),
    '700': mixHex(baseHex, BLACK, 0.34),
    '800': mixHex(baseHex, BLACK, 0.50),
    '900': mixHex(baseHex, BLACK, 0.63),
    '950': mixHex(baseHex, BLACK, 0.74),
  };
}

export function getLuminance(hex: string): number {
  const linear = hexToRgb(hex).map((c) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

export function getContrastRatio(hex1: string, hex2: string): number {
  const l1 = getLuminance(hex1);
  const l2 = getLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker  = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/** Returns '#FFFFFF' or '#000000' — whichever gives better contrast on bgHex. */
export function getContrastColor(bgHex: string): '#FFFFFF' | '#000000' {
  return getLuminance(bgHex) > 0.179 ? '#000000' : '#FFFFFF';
}

export function isValidHex(hex: string): boolean {
  return /^#[0-9A-Fa-f]{6}$/.test(hex);
}
