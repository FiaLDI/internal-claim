import { glowVar, Theme } from "../model/background.config";

export function MobileBackground({ base, glow }: Theme) {
  const glowC = glowVar(glow);
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `
          radial-gradient(
            500px at 50% 30%,
            ${glowC},
            ${base} 70%
          )
        `,
      }}
    />
  );
}
