"use client";

import { useContext } from "react";
import { FullpageContext } from "./FullpageContext";
import { MotionValue } from "framer-motion";

export function useSectionProgress(): MotionValue<number> {
  const ctx = useContext(FullpageContext);

  if (!ctx) {
    throw new Error("useSectionProgress must be used within FullpageContext");
  }

  return ctx.progress;
}
