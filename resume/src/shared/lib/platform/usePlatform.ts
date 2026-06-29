"use client";

import { useEffect, useState } from "react";

export type PlatformInfo = {
  isIOS: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  mounted: boolean;
};

export function usePlatform(): PlatformInfo {
  const [platform, setPlatform] = useState<PlatformInfo>({
    isIOS: false,
    isMobile: false,
    prefersReducedMotion: false,
    mounted: false,
  });

  useEffect(() => {
    const ua = navigator.userAgent;

    setPlatform({
      isIOS: /iPad|iPhone|iPod/.test(ua),
      isMobile: window.matchMedia("(pointer: coarse)").matches,
      prefersReducedMotion: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches,
      mounted: true,
    });
  }, []);

  return platform;
}
