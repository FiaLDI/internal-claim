import { Language } from "@/shared/lib";
import { SkillsDict } from "../types/skills.types";

export const SkillsData: Record<Language, SkillsDict> = {
  en: {
    title: "Skills",
    subtitle:
      "Technologies and practices I use to design, build, and maintain production web applications.",
  },

  ru: {
    title: "Навыки",
    subtitle:
      "Технологии и практики, которые я использую для проектирования, разработки и поддержки продакшен веб-приложений.",
  },
};
