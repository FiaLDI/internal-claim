"use client";

import { useClaimStore } from "@/entities/claim/model/store";
import { Pencil, Plus } from "lucide-react";
import { useModal } from "@/features/open-modal"
import { FilterSetterForm } from "@/features/claim/filter";
import { CreateClaimForm, DeleteClaim, SearchClaim, UpdateClaimForm } from "@/features/claim";

export function ClaimList() {
  const claims = useClaimStore((state) => state.claims);

  const {openModal, closeModal} = useModal();


  return (
    <div className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between">
          <div className="">
            
            <SearchClaim />
            <FilterSetterForm />

          </div>

            <button onClick={() => {
                openModal(
                <CreateClaimForm
                  onSuccess={() => {
                    closeModal?.();
                  }}
                />,
                "Create claim"
              )
            }}><Plus /></button>
           
        </div>
        

      {claims.length !== 0 ? claims.map((claim) => (
        <div
          key={claim.id}
          className="rounded-lg border p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{claim.title}</h3>
            <div className="flex gap-2">
              <DeleteClaim id={claim.id} />
              <button
                onClick={() =>
                  openModal(
                    <UpdateClaimForm
                      claim={claim}
                      onSuccess={() => {
                        closeModal?.();
                      }}
                    />,
                    "Edit claim"
                  )
                }
              >
                <Pencil />
              </button>
            </div>
          </div>

          <p className="mt-2 text-sm text-gray-700">
            {claim.description}
          </p>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>priority: {claim.priority} status: {claim.status + " "} </span>

            <span>
              {new Date(claim.created_at).toLocaleString()}
            </span>
          </div>
        </div>
      )) : <p>Заявок нет.</p>}
    </div>
  );
}