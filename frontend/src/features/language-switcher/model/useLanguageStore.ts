import { create } from "zustand";
import { Language } from "@/shared/lib";

type LanguageStore = {
  lang: Language;
  setLang: (lang: Language) => void;
  hydrate: (lang: Language) => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  lang: "en",

  hydrate: (lang) => set({ lang }),

  setLang: (lang) => {
    document.cookie = `lang=${lang}; path=/; max-age=31536000`;
    set({ lang });
  },
}));
