"use client";

import { createContext } from "react";
import { MotionValue } from "framer-motion";

export type FullpageContextType = {
  index: number;
  progress: MotionValue<number>;
  projectsProgress: MotionValue<number>;
  setIndex: (i: number) => void;
};

export const FullpageContext = createContext<FullpageContextType>({
  index: 0,
  progress: {} as MotionValue<number>,
  projectsProgress: {} as MotionValue<number>,
  setIndex: () => {},
});
