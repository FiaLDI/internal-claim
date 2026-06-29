import { create } from "zustand";
import { ClaimApi } from "./api";
import { ClaimStore } from "./types";

export const useClaimStore = create<ClaimStore>((set, get) => ({
  claims: [],

  limit: 10,
  offset: 0,

  search: "",
  filterSearch: undefined,
  order: undefined,

  filterStatus: undefined,
  filterPriority: undefined,
  sort: undefined,

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
      status: get().filterStatus,
      priority: get().filterPriority,
      order: get().order,
      filtersearch: get().filterSearch,
      sort: get().sort
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

  setSearch: async (title, by) => {
    set({search: title, filterSearch: by});

    await get().load();
  },

  setOrder: async(order) => {
    set({ order: order });

    await get().load();
  } ,

  setStatus: async (status) => {
    set({ filterStatus: status });

    await get().load();
  },

  setSort: async (sort) => {
    set({ sort: sort });

    await get().load();
  },

  setPriority: async (priority) => {
    set({ filterPriority: priority });

    await get().load();
  },

  updateClaim: async(updated) => {
    const findclaim = get().claims.find((c) => c.id === updated.id);

    if (!findclaim) return;

    set((state) => ({
      claims: state.claims.map((thisclaim) =>
        thisclaim.id === updated.id ? updated : thisclaim
      ),
    }));
  },

  doneClaim: async (id) => {
    const claim = get().claims.find((c) => c.id === id);

    if (!claim) return;

    const updated = await ClaimApi.updateClaim(id, {
      title: claim.title,
      description: claim.description,
      priority: claim.priority,
      status: "done",
    });

    set((state) => ({
      claims: state.claims.map((claim) =>
        claim.id === id ? updated : claim
      ),
    }));
  },

}));
