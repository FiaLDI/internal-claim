"use client";

import { useClaimStore } from "@/entities/claim/model/store";


export function ClaimList() {
  const claims = useClaimStore((state) => state.claims);

  if (claims.length === 0) {
    return <p>Заявок нет.</p>;
  }

  return (
    <div className="flex flex-col gap-4 flex-1">
      {claims.map((claim) => (
        <div
          key={claim.id}
          className="rounded-lg border p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{claim.title}</h3>

            <span className="text-sm text-gray-500">
              {claim.status}
            </span>
          </div>

          <p className="mt-2 text-sm text-gray-700">
            {claim.description}
          </p>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>Приоритет: {claim.priority}</span>

            <span>
              {new Date(claim.created_at).toLocaleString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}