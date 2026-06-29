import { fetchFromApi } from "@/shared/api/client";
import { buildClaimsEndpoint } from "./build";
import type { 
    Claim, 
    ClaimApiPayload, 
    ClaimApiResponse, 
    ClaimsApiResponse, 
    FetchClaimsParams 
} from "./types";

export const ClaimApi = {
  async fetchClaims(params?: FetchClaimsParams): Promise<Claim[]> {
    const response = await fetchFromApi<ClaimsApiResponse>(
      buildClaimsEndpoint(params)
    );

    return response.data;
  },

  async fetchClaimById(claimId: string): Promise<Claim> {
    const response = await fetchFromApi<ClaimApiResponse>(
      `claims/${encodeURIComponent(claimId)}`
    );

    return response.data;
  },

  async createClaim(claim: ClaimApiPayload): Promise<Claim> {
    const response = await fetchFromApi<ClaimApiResponse, ClaimApiPayload>(
      "claims",
      {
        method: "POST",
        body: claim,
      }
    );

    return response.data;
  },

  async updateClaim(
    claimId: string,
    claim: ClaimApiPayload
  ): Promise<Claim> {
    const response = await fetchFromApi<ClaimApiResponse, ClaimApiPayload>(
      `claims/${encodeURIComponent(claimId)}`,
      {
        method: "PUT",
        body: claim,
      }
    );

    return response.data;
  },

  async removeClaim(claimId: string): Promise<void> {
    await fetchFromApi<void>(`claims/${encodeURIComponent(claimId)}`, {
      method: "DELETE",
    });
  },
};