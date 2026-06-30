export type Status = "open" | "in_progress" | "done";
export type Priority = "low" | "medium" | "high";

export interface Claim {
    id: string;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    created_at: string;
    updated_at: string;
}

export type ClaimStore = {
  claims: Claim[];

  limit: number;
  offset: number;
  total: number;

  search: string;
  filterSearch?: "title" | "description";
  sort?: "created_at" | "priority";
  order?: "asc" | "desc";
  filterStatus?: Status;
  filterPriority?: Priority;
  loading: boolean;
  error: string | null;

  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setLimit: (limit: number) => Promise<void>;
  setOffset: (offset: number) => Promise<void>;
  setClaims: (claims: Claim[]) => void;
  hydrate: (claims: Claim[]) => void;
  addClaim: (claim: ClaimApiPayload) => Promise<void>;
  removeClaim: (id: string) => Promise<void>;
  updateClaim: (claim: Claim)=> Promise<void>;
  doneClaim: (id: string) => Promise<void>;
  setSearch: (title: string, by: "title" | "description") => Promise<void>;
  setStatus: (status?: Status) => Promise<void>;
  setPriority: (priority?: Priority) => Promise<void>;
  setOrder: (order: "asc" | "desc") => Promise<void>;
  setSort: (sort: "created_at" | "priority") => Promise<void>;
  load: () => Promise<void>;
};

export type ClaimApiPayload = Omit<
  Claim,
  "id" | "created_at" | "updated_at"
>;

export type ClaimsApiMeta = {
  limit?: number;
  offset?: number;
  total: number;
};

export type ClaimsApiResponse = {
  data: Claim[];
  meta: ClaimsApiMeta;
};

export type ClaimApiResponse = {
  data: Claim;
};

export type FetchClaimsParams = {
  limit?: number;
  offset?: number;
  search?: string;
  status?: Status;
  priority?: Priority;
  order?: "asc" | "desc";
  filtersearch?: "title" | "description",
  sort?: "created_at" | "priority";
};
