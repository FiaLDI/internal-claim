import { THEMES } from "./background.config";

export const useBackgroundTheme = (index: number) =>
  THEMES[index % THEMES.length];
