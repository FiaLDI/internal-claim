export type GlowClass =
  | "glow-1"
  | "glow-2"
  | "glow-3"
  | "glow-4"
  | "glow-5";

export interface Theme {
  base: string;
  glow: GlowClass;
}

export const THEMES: Theme[] = [
  { base: "#020617", glow: "glow-1" },
  { base: "#020617", glow: "glow-2" },
  { base: "#020617", glow: "glow-3" },
  { base: "#020617", glow: "glow-4" },
  { base: "#020617", glow: "glow-5" },
];

export const glowVar = (id: GlowClass) =>
  `rgb(var(--${id}) / var(--glow-alpha))`;
