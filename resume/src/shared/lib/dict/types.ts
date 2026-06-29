export const allLanguage = ["en", "ru"] as const;

export type Language = typeof allLanguage[number];

export type IDict<T> = Record<Language, T>;
