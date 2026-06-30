"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

interface Options {
  sectionCount: number;
}

export function useFullpage({ sectionCount }: Options) {
  const [index, setIndex] = useState(0);
  const lockRef = useRef(false);

  const progress = useMotionValue(0);
  const projectsProgress = useMotionValue(0);

  const lock = () => {
    lockRef.current = true;
    setTimeout(() => (lockRef.current = false), 650);
  };

  const getSectionRoot = () =>
    document.querySelector(
      `[data-fullpage-section="${index}"]`
    ) as HTMLElement | null;

  const getScrollable = () => {
    const root = getSectionRoot();
    if (!root) return null;

    return (
      root.querySelector<HTMLElement>("[data-scrollable]") ?? root
    );
  };

  const calcScrollProgress = (el: HTMLElement) => {
    if (el.scrollHeight <= el.clientHeight) return 0;
    return Math.min(
      1,
      Math.max(
        0,
        el.scrollTop / (el.scrollHeight - el.clientHeight)
      )
    );
  };

  useEffect(() => {
    const el = getScrollable();
    if (!el) return;

    const update = () => {
      progress.set(calcScrollProgress(el));
    };

    update();
    el.addEventListener("scroll", update);
    return () => el.removeEventListener("scroll", update);
  }, [index, progress]);

  useEffect(() => {
    const target = index / (sectionCount - 1);

    animate(progress, target, {
      duration: 0.7,
      ease: "easeInOut",
    });
  }, [index, sectionCount, progress]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (lockRef.current) return;

      const el = getScrollable();
      if (!el) return;

      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      const atTop = el.scrollTop <= 0;
      const atBottom =
        el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

      if (goingDown && !atBottom) return;
      if (goingUp && !atTop) return;

      if (goingDown && index < sectionCount - 1) {
        setIndex((i) => i + 1);
        lock();
      } else if (goingUp && index > 0) {
        setIndex((i) => i - 1);
        lock();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [index, sectionCount]);

  return { index, setIndex, progress, projectsProgress };
}
