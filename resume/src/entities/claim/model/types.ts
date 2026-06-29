export type Status = "Active" | "Reject" | "Done";
export type Priority = "Low" | "Normal" | "High";

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

  search: string;
  filter?: Priority;
  order?: "asc" | "desc";

  setClaims: (claims: Claim[]) => void;
  hydrate: (claims: Claim[]) => void;

  addClaim: (claim: ClaimApiPayload) => Promise<void>;
  removeClaim: (id: string) => Promise<void>;
  doneClaim: (id: string) => Promise<void>;

  load: () => Promise<void>;
};

export type ClaimApiPayload = Omit<
  Claim,
  "id" | "created_at" | "updated_at"
>;

export type ClaimsApiMeta = {
  limit: number;
  offset: number;
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
};
