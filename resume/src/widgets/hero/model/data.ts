import { Language } from "@/shared/lib";
import { HeroDict } from "../types/hero.type";

export const HeroData: Record<Language, HeroDict> = {
  en: {
    title: "Leonid Stepanov",
    subTitle: "Full-Stack Developer",
    value:
  "I develop full-stack web applications, working with both frontend and backend. I have commercial experience, integrate APIs, implement features, and maintain clean, structured code.",
    highlights: [
      "TypeScript · Next.js · NestJS · PostgreSQL",
      "Modular architecture · Clean code principles",
      "REST APIs · Real-time basics",
      "Docker · Performance fundamentals",
    ],
    ctaSkills: "Skills",
    ctaPrimary: "Projects",
    image: "/images/leonid.jpg",
  },

  ru: {
    title: "Леонид Степанов",
    subTitle: "Full-Stack разработчик",
    value:
      "Full-Stack разработчик с коммерческим опытом. Разрабатываю и поддерживаю веб-приложения, работаю с frontend и backend, внедряю новый функционал и слежу за качеством и структурой кода.",
    highlights: [
      "TypeScript · Next.js · NestJS · PostgreSQL",
      "Модульная архитектура · принципы чистого кода",
      "REST API · основы real-time",
      "Docker · основы производительности",
    ],
    ctaSkills: "Навыки",
    ctaPrimary: "Проекты",
    image: "/images/leonid.jpg",
  },
};
