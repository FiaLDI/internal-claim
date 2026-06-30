import { HeroData, HeroDict } from "@/widgets/hero";
import { TimelineDataWidget, TimelineDataWidgetType } from "@/widgets/timeline";
import { ProjectWidget, ProjectWidgetType } from "@/widgets/project-list";
import { SkillsData, SkillsDict } from "@/widgets/skills";

import { SkillsGroupData, SkillsGroupDict } from "@/entities/skill";
import { ContactData, ContactDict } from "@/widgets/contacts";
import { ProjectsData, ProjectsDict } from "@/entities/project";
import { TimelineData, TimelineDict } from "@/entities/timeline";

import { IDict } from "./types";

export const dictionaries = {
  hero: HeroData,
  skills: SkillsData,
  skillsGroup: SkillsGroupData,
  contacts: ContactData,
  projects: ProjectsData,
  ProjectWidget: ProjectWidget,
  timeline: TimelineData,
  timelineWidget: TimelineDataWidget,
} satisfies {
  hero: IDict<HeroDict>;
  skills:  IDict<SkillsDict>;
  skillsGroup: IDict<SkillsGroupDict>;
  contacts: IDict<ContactDict>;
  projects: IDict<ProjectsDict>;
  ProjectWidget: IDict<ProjectWidgetType>;
  timeline: IDict<TimelineDict>;
  timelineWidget: IDict<TimelineDataWidgetType>;
};

export type DictionaryKey = keyof typeof dictionaries;
