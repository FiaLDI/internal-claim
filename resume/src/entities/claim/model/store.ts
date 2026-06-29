import { create } from "zustand";
import { ClaimApi } from "./api";
import { ClaimStore } from "./types";

export const useClaimStore = create<ClaimStore>((set, get) => ({
  claims: [],

  limit: 10,
  offset: 0,

  search: "",
  filter: undefined,
  order: undefined,

  hydrate: (claims) => {
    set({ claims });
  },

  setClaims: (claims) => {
    set({ claims });
  },

  load: async () => {
    const claims = await ClaimApi.fetchClaims({
      limit: get().limit,
      offset: get().offset,
      search: get().search,
    });

    set({ claims });
  },

  addClaim: async (claim) => {
    const created = await ClaimApi.createClaim(claim);

    set((state) => ({
      claims: [...state.claims, created],
    }));
  },

  removeClaim: async (id) => {
    await ClaimApi.removeClaim(id);

    set((state) => ({
      claims: state.claims.filter((claim) => claim.id !== id),
    }));
  },

  doneClaim: async (id) => {
    const claim = get().claims.find((c) => c.id === id);

    if (!claim) return;

    const updated = await ClaimApi.updateClaim(id, {
      title: claim.title,
      description: claim.description,
      priority: claim.priority,
      status: "Done",
    });

    set((state) => ({
      claims: state.claims.map((claim) =>
        claim.id === id ? updated : claim
      ),
    }));
  },
}));
