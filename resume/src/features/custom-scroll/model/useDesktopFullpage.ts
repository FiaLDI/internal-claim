"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import { FullPageStaticConfig } from "./FullPageStaticConfig";
import { canScroll, getScrollableParent } from "@/shared/utils/scroll";

interface Options {
  sectionCount: number;
  enabled: boolean;
}

export function useDesktopFullpage({ sectionCount, enabled }: Options) {
  const [index, setIndex] = useState(0);
  const lockRef = useRef(false);

  const progress = useMotionValue(0);
  const projectsProgress = useMotionValue(0);

  const lock = () => {
    lockRef.current = true;
    setTimeout(() => (lockRef.current = false), 650);
  };

  useEffect(() => {
    if (!enabled) return;

    const onWheel = (e: WheelEvent) => {
      if (lockRef.current) return;

      const scrollable = getScrollableParent(e.target as HTMLElement);

      if (scrollable && canScroll(scrollable, e.deltaY)) {
        e.stopPropagation();
        return;
      }

      if (Math.abs(e.deltaY) < FullPageStaticConfig.WHEEL_THRESHOLD) return;

      e.preventDefault();

      if (e.deltaY > 0 && index < sectionCount - 1) {
        setIndex((i) => i + 1);
        lock();
      }

      if (e.deltaY < 0 && index > 0) {
        setIndex((i) => i - 1);
        lock();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [enabled, index, sectionCount]);

  useEffect(() => {
    if (!enabled) return;

    animate(progress, index / (sectionCount - 1), {
      duration: 0.7,
      ease: "easeInOut",
    });
  }, [enabled, index, sectionCount, progress]);

  return {
    index,
    setIndex,
    progress,
    projectsProgress,
  };
}
