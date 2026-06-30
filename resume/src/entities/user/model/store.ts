import { create } from "zustand";
import { AuthApi } from "./api";
import { User } from "./types";

type UserStore = {
  user: User | null;
  loading: boolean;
  error: string | null;
  hydrate: (user: User | null) => void;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getMe: () => Promise<void>;

};

export const useUserStore = create<UserStore>((set) => ({
  user: null,

  loading: false,
  error: null,

  hydrate: (user) => set({ user }),

  login: async (username, password) => {
    const user = await AuthApi.login({ username, password });

    set({ user: user });
  },

  getMe: async() => {
    set({ loading: true, error: null });

    try {
      const user = await AuthApi.me();
      set({ user });
    } catch {
      set({ user: null, error: "Failed to load user data" });
    } finally {
      set({ loading: false });
    }
  },

  logout: async() => {
    await AuthApi.logout();
    set({ user: null })
  }
}));
