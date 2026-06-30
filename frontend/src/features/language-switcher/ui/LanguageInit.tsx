"use client";

import { useLanguageStore } from "../model/useLanguageStore";

export function LanguageInit({ lang }: { lang: "en" | "ru" }) {
  useLanguageStore.getState().hydrate(lang);
  return null;
}
