"use client";

import { dictionaries, DictionaryKey } from "./dictionaries";
import { useLanguageStore } from "@/features/language-switcher/model/useLanguageStore";
import { Language } from "./types";

export function useDict<K extends DictionaryKey>(
  key: K
): (typeof dictionaries)[K][Language] {
  const lang = useLanguageStore((s) => s.lang);
  return dictionaries[key][lang];
}
