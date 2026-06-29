"use client";

import { ClaimApi } from "@/entities/claim/model/api";
import { ClaimForm } from "../../shared/ui/ClaimForm";
import { useClaimStore } from "@/entities/claim/model/store";

type Props = {
  onSuccess?: () => void;
};

export function CreateClaimForm({ onSuccess }: Props) {
  const addClaim = useClaimStore((state) => state.addClaim);

  return (
    <ClaimForm
      initialValues={{
        title: "",
        description: "",
        status: "open",
        priority: "medium",
      }}
      submitText="Create"
      loadingText="Creating..."
      onSubmit={async (values) => {
        await addClaim(values);
        onSuccess?.();
      }}
    />
  );
}
