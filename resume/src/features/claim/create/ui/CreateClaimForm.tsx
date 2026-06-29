"use client";

import { ClaimApi } from "@/entities/claim/model/api";
import { ClaimForm } from "../../shared/ui/ClaimForm";

type Props = {
  onSuccess?: () => void;
};

export function CreateClaimForm({ onSuccess }: Props) {
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
        await ClaimApi.createClaim(values);
        onSuccess?.();
      }}
    />
  );
}
