"use client";

import { MotionValue, useTransform } from "framer-motion";

export function useBackgroundMotion(
  progress: MotionValue<number>,
  projectsProgress: MotionValue<number>
) {
  const scale = useTransform(progress, [0, 1], [1, 1.2]);
  const opacity = useTransform(progress, [0, 1], [0.25, 0.45]);

  const projectsGlow = useTransform(
    projectsProgress,
    [0, 1],
    [0.25, 0.6]
  );

  const projectsScale = useTransform(
    projectsProgress,
    [0, 1],
    [1, 1.35]
  );

  return {
    scale,
    opacity,
    projectsGlow,
    projectsScale,
  };
}
