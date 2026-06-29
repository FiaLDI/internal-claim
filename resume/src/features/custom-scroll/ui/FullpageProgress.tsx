"use client";

import { useContext } from "react";
import { FullpageContext } from "../model";

const SECTIONS = ["Home", "Skills", "Projects", "Timeline", "Contact"];

export function FullpageProgress() {
  const ctx = useContext(FullpageContext);
  if (!ctx) return null;

  const { index, setIndex } = ctx;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-4 bg-black/40 backdrop-blur-md rounded-xl px-4 py-2 pointer-events-auto">
      {SECTIONS.map((label, i) => (
        <button
          data-current={index===i}
          key={label}
          onClick={() => setIndex(i)}
          className={"text-sm transition-colors data-[current=true]:text-indigo-400 text-neutral-400 hover:text-neutral-200 cursor-pointer"}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
