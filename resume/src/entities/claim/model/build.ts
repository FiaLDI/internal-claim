import { FetchClaimsParams } from "./types";

export const buildClaimsEndpoint = (params?: FetchClaimsParams) => {
  const searchParams = new URLSearchParams();

  if (params?.search) {
    searchParams.set("search", params.search);
  }

  if (params?.limit !== undefined) {
    searchParams.set("limit", String(params.limit));
  }

  if (params?.offset !== undefined) {
    searchParams.set("offset", String(params.offset));
  }

  const queryString = searchParams.toString();

  return queryString ? `claims?${queryString}` : "claims";
};
