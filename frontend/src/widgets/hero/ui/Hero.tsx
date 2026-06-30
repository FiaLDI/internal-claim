"use client";

import Image from "next/image";
import { useContext } from "react";

import { FullpageContext } from "@/features/custom-scroll/model";
import { useDict } from "@/shared/lib";
import { LineToRight } from "@/shared/ui/animation";
import { DefaultButton, PrimaryButton } from "@/shared/ui/button";

export const Hero = () => {
  const { setIndex } = useContext(FullpageContext);
  const hero = useDict("hero");

  return (
    <div
      id="hero"
      className="h-screen w-full"
    >
      <div className="max-w-7xl mx-auto h-full px-6">
        <div className="relative flex h-full items-center justify-between gap-16 text-white">
          <div className="flex flex-col gap-8 max-w-xl">
            <div className="relative inline-block">
              <h1
                className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]"
              >
                {hero.title}
              </h1>
              <LineToRight />
            </div>
            <p
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              {hero.subTitle}
            </p>
            <p
              className="lg:text-lg text-neutral-300 leading-relaxed max-w-lg"
            >
              {hero.value}
            </p>
            <div className="grid grid-cols-1 gap-3 pt-2">
              {hero.highlights.map((val, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-md border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-300 hover:border-indigo-500/40 transition-colors"
                >
                  <span className="leading-relaxed">{val}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <DefaultButton
                title={hero.ctaPrimary}
                handler={() => setIndex?.(2)}
              />
              <PrimaryButton
                title={hero.ctaSkills}
                handler={() => setIndex?.(1)}
              />
            </div>
          </div>
          <div className="relative hidden md:block">
            <div
              className="absolute -inset-16 rounded-full bg-indigo-500/10 blur-[160px]"
            />

            <Image
              src={hero.image}
              width={420}
              height={420}
              alt={hero.title}
              priority
              className="relative z-10 rounded-xl border border-neutral-800 bg-neutral-900/70 backdrop-blur"
            />
          </div>

        </div>
      </div>
    </div>
  );
};
