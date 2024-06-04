import type { CssColor } from "@adobe/leonardo-contrast-colors";
import { Hsluv } from "hsluv";

export const hexToCssHsl = (hex: string, valuesOnly = false) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) as Array<string>;
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  let cssString = "";
  (r /= 255), (g /= 255), (b /= 255);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s,
    l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  cssString = h + "," + s + "%," + l + "%";
  cssString = !valuesOnly ? "hsl(" + cssString + ")" : cssString;

  return cssString;
};

export const hexToHSL = (H: string) => {
  // Convert hex to RGB first
  let r: string | number = 0,
    g: string | number = 0,
    b: string | number = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1] as unknown as number;
    g = "0x" + H[2] + H[2] as unknown as number;
    b = "0x" + H[3] + H[3] as unknown as number;
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2] as unknown as number;
    g = "0x" + H[3] + H[4] as unknown as number;
    b = "0x" + H[5] + H[6] as unknown as number;
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin;
  let h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
};

export const hslArrToCss = (arr: number[]) => {
  return "hsl(" + arr[0] + "," + arr[1] + "%," + arr[2] + "%)";
};

export const HSLToHex = (h: number, s: number, l: number) => {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2;
  let r: number | string = 0,
    g: number | string = 0,
    b: number | string = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
};

export const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m: string, r: string, g: string, b: string) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

export const luminanceFromRgb = (r: string, g: string, b: string) => {
  const a = [Number(r), Number(g), Number(b)].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export function luminanceFromHex(hex: CssColor) {
  const rgb = hexToRgb(hex);
  if (rgb) {
    return luminanceFromRgb(rgb.r.toString(), rgb.g.toString(), rgb.b.toString());
  }
  return null;
};

export const getRatioFromLum = (lum1: number, lum2: number) => {
  return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
};

export const getLightnessFromHex = (hex: string) => {
  const conv = new Hsluv();
  conv.hex = hex;
  conv.hexToHsluv();
  return Number(conv.hsluv_l.toFixed(0));
};

export const getContrastFromHex = (
  mainColor: CssColor,
  backgroundColor: CssColor
) => {
  const lum1 = luminanceFromHex(mainColor) as number;
  const lum2 = luminanceFromHex(backgroundColor) as number;
  return getRatioFromLum(lum1, lum2);
};

export const getContrastFromLightness = (
  lightness: number,
  mainColor: CssColor,
  backgroundColor: CssColor
) => {
  const conv = new Hsluv();
  conv.hex = mainColor;
  conv.hexToHsluv();
  conv.hsluv_l = lightness;
  conv.hsluvToHex();
  const lightMainColor = conv.hex as CssColor;
  const lum1 = luminanceFromHex(lightMainColor) as number;
  const lum2 = luminanceFromHex(backgroundColor) as number;
  const ratio = getRatioFromLum(lum1, lum2);

  return ratio;
};

export const lightenDarkThemeColor = (color: CssColor) => {
  const lightness = getLightnessFromHex(color);

  if (lightness > 45) {
    return color;
  }

  const conv = new Hsluv();
  conv.hex = color;
  conv.hexToHsluv();
  conv.hsluv_l = conv.hsluv_l + 10;
  conv.hsluvToHex();
  return conv.hex as CssColor;
};
