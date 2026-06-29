import { Language } from "@/shared/lib";
import { SkillsGroupDict } from "../types/skills.types";

export const SkillsGroupData: Record<Language, SkillsGroupDict> = {
  en: {
    groups: [
      {
        level: "Core Expertise",
        description:
          "Technologies I work with daily and rely on when delivering production-ready solutions.",
        glow: true,
        items: [
          {
            capability:
              "Building scalable and maintainable frontend applications",
            stack: ["React", "Next.js", "TypeScript", "Feature-Sliced Design"],
          },
          {
            capability:
              "Designing backend services and integrating APIs",
            stack: ["NestJS", "Node.js", "REST"],
          },
          {
            capability:
              "Managing application state and server data",
            stack: ["Zustand", "React Query"],
          },
        ],
      },
      {
        level: "Supporting Tools",
        description:
          "Tools and technologies that support development workflows, quality, and reliability.",
        items: [
          {
            capability:
              "Working with databases and data modeling",
            stack: ["PostgreSQL", "Prisma"],
          },
          {
            capability:
              "Development tooling and automation",
            stack: ["Docker", "CI/CD", "ESLint", "Prettier"],
          },
        ],
      },
      {
        level: "Exploration & Growth",
        description:
          "Technologies I explore through experiments and side projects to expand my skill set.",
        items: [
          {
            capability:
              "Experimental and cross-platform development",
            stack: ["Rust", "Tauri", "Unity", "WebRTC"],
          },
        ],
      },
    ],
  },

  ru: {
    groups: [
      {
        level: "Ключевая экспертиза",
        description:
          "Технологии, с которыми я работаю ежедневно и использую при создании продакшен-решений.",
        glow: true,
        items: [
          {
            capability:
              "Разработка масштабируемых и поддерживаемых frontend-приложений",
            stack: ["React", "Next.js", "TypeScript", "Feature-Sliced Design"],
          },
          {
            capability:
              "Проектирование серверной логики и интеграция API",
            stack: ["NestJS", "Node.js", "REST"],
          },
          {
            capability:
              "Управление состоянием приложения и серверными данными",
            stack: ["Zustand", "React Query"],
          },
        ],
      },
      {
        level: "Инструменты и экосистема",
        description:
          "Инструменты и технологии, которые дополняют разработку и помогают поддерживать качество и надёжность.",
        items: [
          {
            capability:
              "Работа с базами данных и моделирование данных",
            stack: ["PostgreSQL", "Prisma", "Redis"],
          },
          {
            capability:
              "Инструменты разработки и автоматизация процессов",
            stack: ["Docker", "CI/CD", "ESLint", "Prettier"],
          },
        ],
      },
      {
        level: "Изучение и развитие",
        description:
          "Направления, которые я изучаю через эксперименты и pet-проекты.",
        items: [
          {
            capability:
              "Экспериментальная и кроссплатформенная разработка",
            stack: ["Rust", "Tauri", "Unity", "WebRTC"],
          },
        ],
      },
    ],
  },
};
