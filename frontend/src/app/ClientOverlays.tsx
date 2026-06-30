"use client";

import dynamic from "next/dynamic";

const ModalContainer = dynamic(
  () =>
    import("@/features/open-modal/ui/ModalContainer").then(
      (mod) => mod.ModalContainer
    ),
  { ssr: false }
);

export function ClientOverlays() {
  return <ModalContainer />;
}
