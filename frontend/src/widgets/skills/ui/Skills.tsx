"use client";

import { useDict } from "@/shared/lib";
import { SkillGroup } from "./SkillGroup";

export const Skills = () => {
  const data = useDict("skills");
  const groups = useDict("skillsGroup");

  return (
    <div
      id="skills"
      className="lg:h-screen w-full"
    >
      <div
        data-scrollable
        className="relative w-full flex items-center justify-center flex-col max-w-7xl mx-auto px-6 py-10 pb-40 gap-5 text-white lg:h-full lg:overscroll-contain lg:no-scrollbar"
      >
        {/* HEADER */}
        <div className="max-w-2xl relative z-10">
          <h2
            className="text-4xl lg:text-5xl font-semibold tracking-tight w-fit text-center"
          >
            {data.title}
            
            <div className="h-0.5 w-[350px] mt-3 px-6 bg-indigo-500 shadow-[0_0_5px_0.5px_rgba(99,102,241,0.9)]"></div>
          </h2>
        </div>

        {/* GROUPS */}
        <div className="flex flex-col gap-5 relative z-10">
          {groups.groups.map((group, idx) => (
            <SkillGroup
              key={`skills-${idx}-${group.level}`}
              group={group}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
