import { SkillGroup as SkillGroupType, SkillItem } from "@/entities/skill";
import { ToTopLeaped } from "@/shared/ui/animation";

export const SkillGroup = ({ group }: { group: SkillGroupType }) => {
  return (
    <ToTopLeaped key={group.level}>
      <div className="relative">

        {group.glow && (
          <div
            className="absolute -inset-16 rounded-3xl bg-indigo-500/10 blur-3xl pointer-events-none"
          />
        )}

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <div>
            <h3
              className="text-2xl font-medium tracking-tight"
            >
              {group.level}
            </h3>
            <p
              className="mt-2 text-sm text-neutral-400 leading-relaxed"
            >
              {group.description}
            </p>
          </div>
          <div
            className="relative flex flex-col lg:grid grid-cols-3 gap-5"
          >
            {group.items.map((item, idx) => <SkillItem key={`item-skills-${idx}`} item={item}/>)}
          </div>
        </div>
      </div>
    </ToTopLeaped>
  );
};
