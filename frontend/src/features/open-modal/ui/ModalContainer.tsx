"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useModalStore } from "../model/modalStore";
import { createPortalNode } from "../lib/createPortalNode";

type Portal = ReturnType<typeof createPortalNode>;

export const ModalContainer = () => {
  const { open, content, title, closeModal } = useModalStore();

  const [portal] = useState<Portal | null>(() => {
    if (typeof window === "undefined") return null;
    return createPortalNode();
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeModal]);

  if (!open || !portal) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="relative min-w-[300px] max-w-[80vw] rounded-sm bg-background border-2 border-indigo-400 p-6">
        <div className="flex justify-between items-center">
          <div className="text-white">
            {title}
          </div>
          <button
            onClick={closeModal}
            className=" hover:text-red-400 cursor-pointer"
          >
            <X color="white" />
          </button>
        </div>

        {content}
      </div>
    </div>,
    portal.node
  );
};
