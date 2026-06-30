import { useLanguageStore } from "./useLanguageStore";

export function useLanguage() {
  const lang = useLanguageStore((s) => s.lang);
  const setLang = useLanguageStore((s) => s.setLang);

  return { lang, setLang };
}
