"use client";

import { Claim } from "@/entities/claim/model/types";
import { ClaimForm } from "../../shared/ui/ClaimForm";
import { useClaimStore } from "@/entities/claim/model/store";
import { useNotify } from "@/features/notify";

type Props = {
  claim: Claim;
  onSuccess?: () => void;
  onError?: () => void;
};

export function UpdateClaimForm({ claim, onSuccess, onError }: Props) {
  const updateClaim = useClaimStore((state) => state.updateClaim);
    const {notify} = useNotify()
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
      onSubmit={async (values) => {
        try {
          await updateClaim({ ...claim, ...values });

          onSuccess?.();
        } catch (error) {
          if (error instanceof Error) {
            notify(error.message);
          }

          onError?.();
        }
      }}
      onError={() => {onError?.()}}
    />
  );
}