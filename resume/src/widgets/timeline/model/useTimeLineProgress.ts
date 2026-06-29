import { useRef, useState } from "react";
import { TimelineDict } from "@/entities/timeline";

interface UseProjectCategoriesResult {
  containerRef: React.RefObject<HTMLElement | null>;
  activeId: number | null
  setActiveId: (activeId: number) => void;
  progressPercent: number;
}

export function useTimeLineProgress(
  items: TimelineDict
): UseProjectCategoriesResult {
  const containerRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  const total = items.items.length;

  const progressPercent =
    activeId !== null && total > 1
      ? ((activeId - 1) / (total - 1)) * 100
      : 0;

  return {
    containerRef,
    activeId,
    setActiveId,
    progressPercent,
  };
}
