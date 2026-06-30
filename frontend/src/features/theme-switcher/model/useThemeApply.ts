"use client";

import { useEffect } from "react";
import { useThemeStore } from "./useThemeStore";

export const useThemeApply = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
};
