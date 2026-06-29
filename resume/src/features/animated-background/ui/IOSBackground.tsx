"use client";

import { glowVar, type Theme } from "../model/background.config";

interface Props {
  theme: Theme;
}

export const IOSBackground = ({ base, glow }: Theme) => {
  const glowC = glowVar(glow);

  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        background: `
          radial-gradient(
            420px at 50% 25%,
            ${glowC},
            ${base} 70%
          )
        `,
      }}
    />
  );
};
