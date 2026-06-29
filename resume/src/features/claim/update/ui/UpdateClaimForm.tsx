"use client";

import { ClaimApi } from "@/entities/claim/model/api";
import { Claim, ClaimApiPayload } from "@/entities/claim/model/types";
import { ClaimForm } from "../../shared/ui/ClaimForm";
import { useClaimStore } from "@/entities/claim/model/store";

type Props = {
  claim: Claim;
  onSuccess?: () => void;
};

export function UpdateClaimForm({ claim, onSuccess }: Props) {
  const updateClaim = useClaimStore((state) => state.updateClaim);
  return (
    <ClaimForm
      initialValues={{
        title: claim.title,
        description: claim.description,
        status: claim.status,
        priority: claim.priority,
      }}
      submitText="Save"
      loadingText="Saving..."
      onSubmit={async (values: ClaimApiPayload) => {
        await ClaimApi.updateClaim(claim.id, values);
        await updateClaim({...claim, ...values}); 
        onSuccess?.();
      }}
    />
  );
}