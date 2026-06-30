"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export function TimelineItem({
  id,
  title,
  subtitle,
  description,
  activeId,
  onActive,
}: {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  activeId: number | null;
  onActive: (id: number) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);

  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (isInView) onActive(id);
  }, [isInView, id, onActive]);

  const isCompleted = activeId !== null && id <= activeId;
  const isActive = id === activeId;
  const isLeft = id % 2 === 0;

  return (
    <motion.li
      ref={ref}
      className="relative flex justify-center"
    >
      <motion.span
        className="
          absolute top-7
          h-3 w-3 rounded-full
        "
        animate={{
          backgroundColor: isCompleted ? "#6366f1" : "#525252",
          boxShadow: isActive
            ? "0 0 0 6px rgba(99,102,241,0.35)"
            : isCompleted
            ? "0 0 0 4px rgba(99,102,241,0.2)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{
          opacity: isCompleted ? 1 : 0.4,
          scale: isActive ? 1 : 0.97,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`relative max-w-md rounded-xl border p-6 ${isLeft ? "mr-auto ml-16" : "ml-auto mr-16"} ${ isCompleted ? "border-indigo-500/30 bg-neutral-900/70" : "border-neutral-800 bg-neutral-900/40" }`}
      >
        {isActive && (
          <div
            className="absolute -inset-6 rounded-2xl bg-indigo-500/10 blur-xl -z-10"
          />
        )}
        <div
          className="text-xs uppercase tracking-widest text-neutral-500 mb-2"
        >
          Stage {id}
        </div>
        <h3
          className="text-lg font-medium tracking-tight text-neutral-100"
        >
          {title}
        </h3>
        {subtitle && (
          <p
            className="mt-1 text-sm text-neutral-300"
          >
            {subtitle}
          </p>
        )}
        {description && (
          <p
            className="mt-3 ext-sm leading-relaxed text-neutral-400"
          >
            {description}
          </p>
        )}
      </motion.div>
    </motion.li>
  );
}
