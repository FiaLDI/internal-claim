import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SolutionStore } from "../types/solution.type";

export const useSolutionStore = create<SolutionStore>()(
  persist(
    (set, get) => ({
      solution: [],

      addSolution(code) {
        set({
          solution: [
            ...get().solution,
            { id: crypto.randomUUID(), code }
          ]
        });
      },

      removeSolution(id) {
        set({
          solution: get().solution.filter(v => v.id !== id)
        });
      },

      getSolution(id) {
        return get().solution.find(v => v.id === id);
      },

      editSolution(id, code) {
        set({
          solution: get().solution.map(v =>
            v.id === id ? { ...v, code } : v
          )
        });
      },

      hydrate(solution) {
        set({ solution });
      }
    }),
    {
      name: "solutions-storage"
    }
  )
);