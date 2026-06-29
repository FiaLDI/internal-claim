"use client";

import {
  TimelineItem as TimelineItemComponent,
} from "@/entities/timeline";
import { useDict } from "@/shared/lib";
import { useSlowScroll } from "@/shared/hooks/scroll";
import { useTimeLineProgress } from "../model/useTimeLineProgress";

export const TimeLine = () => {
  const data = useDict("timelineWidget");
  const items = useDict("timeline");

  const {
    containerRef,
    activeId,
    setActiveId,
    progressPercent,
  } = useTimeLineProgress(items);

  useSlowScroll(containerRef, { speed: 0.2 });

  return (
    <div
      id="timeline"
      data-scrollable
      className="min-h-screen w-full lg:h-screen lg:overflow-y-auto lg:no-scrollbar"
    >

      <div className="max-w-7xl mx-auto px-6 py-12 pb-32 text-white relative">

        {/* HEADER */}
        <div className="mb-20 flex justify-center">
          <h2
            className="text-4xl lg:text-5xl font-semibold tracking-tight w-fit text-center"
          >
            {data.title}
            
            <div className="h-0.5 w-[350px] mt-3 px-6 bg-indigo-500 shadow-[0_0_5px_0.5px_rgba(99,102,241,0.9)]"></div>
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full">
            {/* Base line */}
            <div className="absolute top-0 bottom-0 w-px bg-neutral-800" />

            {/* Progress line */}
            <div
              className="
                absolute top-0 w-px
                bg-indigo-500
                transition-all
                duration-300
              "
              style={{ height: `${progressPercent}%` }}
            />
          </div>

          {/* ITEMS */}
          <ol className="relative space-y-28">
            {items.items.map((item) => (
              <TimelineItemComponent
                key={item.id}
                {...item}
                activeId={activeId}
                onActive={setActiveId}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
