"use client";

import { motion, MotionValue } from "framer-motion";
import { glowVar, Theme } from "../model/background.config";

interface DesktopBackgroundProps {
  index: number;
  theme: Theme;

  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  projectsGlow: MotionValue<number>;
  projectsScale: MotionValue<number>;
}

export function DesktopBackground({
  index,
  theme,
  scale,
  opacity,
  projectsGlow,
  projectsScale,
}: DesktopBackgroundProps) {
  const glow = glowVar(theme.glow);

  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      animate={{
        backgroundColor: "rgb(var(--background))",
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >

      {/* radial gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `
            radial-gradient(
              800px at ${50 + index * 5}% ${30 + index * 8}%,
              ${glow},
              transparent 60%
            )
          `,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* main glow */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[120px]"
        style={{
          background: glow,
          scale,
          opacity,
          willChange: "transform",
        }}
        animate={{
          x: index * 60 - 200,
          y: index * 40 - 200,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* corner glow */}
      <motion.div
        className="absolute right-[-300px] bottom-[-300px] w-[600px] h-[600px] rounded-full blur-[140px]"
        style={{ background: glow }}
        animate={{
          x: -index * 50,
          y: -index * 30,
        }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />

      {/* projects glow */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
        style={{
          background: glow,
          opacity: projectsGlow,
          scale: projectsScale,
          willChange: "transform",
        }}
      />

      {/* noise */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" />

      {/* vignette */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40" />
    </motion.div>
  );
}
