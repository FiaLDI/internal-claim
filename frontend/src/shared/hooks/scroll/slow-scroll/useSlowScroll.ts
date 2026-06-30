"use client";

import { RefObject, useEffect } from "react";

type UseSlowScrollOptions = {
  speed?: number;
};

export const useSlowScroll = (
  ref: RefObject<HTMLElement | null>,
  { speed = 0.2 }: UseSlowScrollOptions = {}
) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollTop += e.deltaY * speed;
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [ref, speed]);
};
