"use client";

import { SkillItemType } from "../types/skills.types";

export const SkillItem = ({item}: {item: SkillItemType}) => 
(
    <div         
        className="rounded-md border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-indigo-500/40 transition-colors"
    >
        <div className="text-sm text-neutral-200">
        {item.capability}
        </div>

        <div className="mt-1 text-xs text-neutral-400">
        {item.stack.join(" · ")}
        </div>
    </div>
)