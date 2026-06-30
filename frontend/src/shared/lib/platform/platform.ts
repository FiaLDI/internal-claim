"use client";

/**
 * iOS detection
 * ВАЖНО: userAgent, т.к. iPadOS может быть pointer:fine
 */
export const isIOS =
  typeof window !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

/**
 * Mobile devices (touch-first)
 */
export const isMobile =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

/**
 * Reduced motion (accessibility + performance)
 */
export const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
