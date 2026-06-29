import { FetchClaimsParams } from "./types";

export const buildClaimsEndpoint = (params?: FetchClaimsParams) => {
  const searchParams = new URLSearchParams();

  if (params?.search) {
    searchParams.set("search", params.search);
  }

  if (params?.filtersearch) {
    searchParams.set("filtersearch", params.filtersearch);
  }

  if (params?.limit !== undefined) {
    searchParams.set("limit", String(params.limit));
  }

  if (params?.offset !== undefined) {
    searchParams.set("offset", String(params.offset));
  }

  if (params?.status)
    searchParams.set("status", params.status);

  if (params?.priority)
    searchParams.set("priority", params.priority);

  if (params?.order)
    searchParams.set("order", params.order);

  if (params?.sort)
    searchParams.set("sort", params?.sort);

  const queryString = searchParams.toString();

  return queryString ? `claims?${queryString}` : "claims";
};
