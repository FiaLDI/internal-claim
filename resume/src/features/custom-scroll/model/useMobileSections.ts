"use client";

import { useEffect, useRef, useState } from "react";

interface Options {
  enabled: boolean;
  sectionCount: number;
}

export function useMobileSections({ enabled }: Options) {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      () => {
        const viewportHeight = window.innerHeight;
        const viewportCenter = viewportHeight / 2;

        let bestIndex = 0;
        let bestDistance = Infinity;

        sectionRefs.current.forEach((el, index) => {
          if (!el) return;

          const rect = el.getBoundingClientRect();

          // центр секции
          const sectionCenter =
            rect.top + rect.height / 2;

          const distance = Math.abs(
            sectionCenter - viewportCenter
          );

          // секция должна хотя бы частично быть в viewport
          const isVisible =
            rect.bottom > 0 &&
            rect.top < viewportHeight;

          if (isVisible && distance < bestDistance) {
            bestDistance = distance;
            bestIndex = index;
          }
        });

        setActiveIndex(bestIndex);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [enabled]);

  const scrollTo = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return {
    sectionRefs,
    activeIndex,
    scrollTo,
  };
}
