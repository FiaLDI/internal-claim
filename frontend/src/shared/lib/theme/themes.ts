export const allTheme = ["standart", "light", "dark"] as const;

export type Theme = typeof allTheme[number];

export const validateTheme = (text?: string) => allTheme.filter(val => val == text);
