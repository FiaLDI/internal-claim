"use client";

import { useContext } from "react";
import { FullpageContext } from "@/features/custom-scroll/model";
import { usePlatform } from "@/shared/lib/platform";

const CONTACT_INDEX = 4;

export const useInitAnimation = (): { isActive: boolean } => {
  const ctx = useContext(FullpageContext);

  const {
    isIOS,
    isMobile,
  } = usePlatform();

  if (isIOS || isMobile) {
    return { isActive: true };
  }

  const { index } = ctx;
  return { isActive: index === CONTACT_INDEX };
};
