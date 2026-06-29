"use client";

import { useThemeStore } from "../model/useThemeStore";
import { Theme } from "@/shared/lib/theme";

export function ThemeInit({ theme }: { theme: Theme }) {
  useThemeStore.getState().hydrate(theme);
  return null;
}
