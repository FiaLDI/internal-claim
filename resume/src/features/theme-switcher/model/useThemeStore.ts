import { create } from "zustand";
import { Theme } from "@/shared/lib/theme";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  hydrate: (theme: Theme) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "dark",

  hydrate: (theme) => set({ theme }),

  setTheme: (theme) => {
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
    set({ theme });
  },
}));
