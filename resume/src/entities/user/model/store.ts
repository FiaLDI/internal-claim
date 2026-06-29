import { create } from "zustand";
import { AuthApi } from "./api";
import { User } from "./types";

type UserStore = {
  user: User | null;
  hydrate: (user: User | null) => void;
  login: (username: string, password: string) => Promise<void>;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,

  hydrate: (user) => set({ user }),

  login: async (username, password) => {
    const user = await AuthApi.login({ username, password });
    set({ user });
  },
}));