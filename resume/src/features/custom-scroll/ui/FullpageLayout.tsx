"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FullpageContext } from "../model";
import { useDesktopFullpage } from "../model/useDesktopFullpage";
import { useMobileSections } from "../model/useMobileSections";

import { FullpageProgress } from "./FullpageProgress";
import { LanguageSwitcher } from "@/features/language-switcher/ui/LanguageSwitcher";
import { AnimatedBackground } from "@/features/animated-background/ui";

import { usePlatform } from "@/shared/lib/platform";
import { ThemeSwitcher, useThemeApply } from "@/features/theme-switcher";

export function FullpageLayout({
  sections,
}: {
  sections: ReactNode[];
}) {
  const { isMobile, isIOS } = usePlatform();

  const isDesktop = !(isMobile || isIOS);

  const desktop = useDesktopFullpage({
    sectionCount: sections.length,
    enabled: isDesktop,
  });

  const mobile = useMobileSections({
    sectionCount: sections.length,
    enabled: !isDesktop,
  });

  const index = isDesktop
    ? desktop.index
    : mobile.activeIndex;

  const setIndex = (i: number) => {
    if (isDesktop) {
      desktop.setIndex(i);
    } else {
      mobile.scrollTo(i);
    }
  };

  useThemeApply();

  return (
    <FullpageContext.Provider
      value={{
        index,
        setIndex,
        progress: desktop.progress,
        projectsProgress: desktop.projectsProgress,
      }}
    >
      <AnimatedBackground
        index={index}
        progress={desktop.progress}
        projectsProgress={desktop.projectsProgress}
      />

      {!isDesktop && (
        <>
          <div className="fixed inset-0 z-20 pointer-events-none">
            <div className="pointer-events-auto">
              <FullpageProgress />
            </div>
            <div className="pointer-events-auto">
              <LanguageSwitcher />
            </div>
            <div className="pointer-events-auto">
              <ThemeSwitcher /> 
            </div>
          </div>
          <div className="h-screen overflow-y-auto overflow-x-hidden">
            {sections.map((section, i) => (
              <section
                key={i}
                ref={(el) => {
                  mobile.sectionRefs.current[i] = el;
                }}
                data-index={i}
                className="min-h-screen"
              >
                {section}
              </section>
            ))}
          </div>
        </>
      )}
      {isDesktop && (
        <div className="w-full h-screen overflow-hidden relative z-10">
          <FullpageProgress />
          <LanguageSwitcher />
          <ThemeSwitcher /> 

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0"
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (
                  info.offset.y < -80 &&
                  index < sections.length - 1
                ) {
                  desktop.setIndex(index + 1);
                }

                if (
                  info.offset.y > 80 &&
                  index > 0
                ) {
                  desktop.setIndex(index - 1);
                }
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              <div className="h-full w-full">
                {sections[index]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </FullpageContext.Provider>
  );
}
