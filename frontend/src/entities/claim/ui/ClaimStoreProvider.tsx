"use client";

import { useRef } from "react";
import { Claim } from "../model/types";
import { useClaimStore } from "../model/store";

export function ClaimStoreProvider({
  claims,
  children,
}: {
  claims: Claim[];
  children: React.ReactNode;
}) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useClaimStore.setState({ claims });
    initialized.current = true;
  }

  return children;
}
