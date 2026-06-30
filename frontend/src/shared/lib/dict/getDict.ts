import { dictionaries } from "./dictionaries";
import { Language } from "./types";

export function getDict<
  K extends keyof typeof dictionaries
>(
  lang: Language,
  key: K
): (typeof dictionaries)[K][Language] {
  return dictionaries[key][lang];
}
