
import { Language } from "@/shared/lib";
import { ProjectsDict } from "../types/project.types";

export const ProjectsData: Record<Language, ProjectsDict> = {
  en: {
    categoriesMeta: {
      Core:
        "Large projects where I designed and implemented core functionality, architecture, and data flow.",
      Contribution:
        "Commercial and team projects where I worked within existing codebases and business requirements.",
      Pet:
        "Side projects focused on experimentation, learning, and exploring new technologies.",
      Legacy:
        "Earlier projects demonstrating foundational frontend and backend concepts.",
    },

    items: [
      {
        id: 1,
        category: "Core",
        title: "Orbis — Real-Time Communication Platform (Diploma)",
        description:
          "Designed and developed a real-time communication platform with private channels, role-based access, and moderation features. Worked across frontend and backend, focusing on modular architecture and reliable data flow.",
        tech: [
          "React",
          "Next.js",
          "Express",
          "Redis",
          "PostgreSQL",
          "Socket.IO",
          "FSD",
        ],
        link: "https://github.com/FiaLDI/Orbis-Diplom",
        isPrivate: false,
      },
      {
        id: 2,
        category: "Core",
        title: "Orbis Game — Sci-Fi Survival (Unity)",
        description:
          "Implemented core gameplay systems including abilities, stats, buffs, quests, and procedural world generation. Focused on performance optimization related to rendering and object spawning.",
        tech: [
          "Unity",
          "C#",
          "FishNet",
          "ScriptableObjects",
          "GPU Instancing",
        ],
        link: "https://github.com/FiaLDI/Project-Terraform",
        isPrivate: false,
      },

      {
        id: 3,
        category: "Contribution",
        title: "singlepagestartup — Project Contribution",
        description:
          "Implemented centralized HTTP error handling and improved search pagination in the admin panel while working within an existing production codebase.",
        tech: ["React", "Next.js", "TypeScript"],
        link: "https://github.com/singlepagestartup/singlepagestartup",
        isPrivate: false,
      },
      {
        id: 4,
        category: "Contribution",
        title: "Kultfond RF (Private Project)",
        description:
          "Improved responsive layouts and refined UI behavior for mobile devices on a production website.",
        tech: ["React", "Next.js", "TailwindCSS"],
        isPrivate: true,
      },
      {
        id: 5,
        category: "Contribution",
        title: "business.zapaha.net (Private Project)",
        description:
          "Enhanced user interface and implemented adaptive layouts to support a wide range of screen sizes.",
        tech: ["React", "Next.js", "TailwindCSS"],
        isPrivate: true,
      },
      {
        id: 6,
        category: "Contribution",
        title: "didigallery.com (Private Project)",
        description:
          "Developed new UI components and adjusted responsive behavior based on business requirements.",
        tech: ["React", "Next.js", "TailwindCSS"],
        isPrivate: true,
      },

      {
        id: 7,
        category: "Pet",
        title: "Markdown Editor — Tauri Desktop Application",
        description:
          "Built a cross-platform Markdown editor using Next.js and Tauri, focusing on desktop integration, performance, and usability.",
        tech: ["Next.js", "Tauri", "Rust", "TypeScript"],
        link: "https://github.com/FiaLDI/Markdown-Editor",
        isPrivate: false,
      },
      {
        id: 8,
        category: "Pet",
        title: "PostCreator — Automated Content Tool",
        description:
          "Developed a web tool for generating structured posts, implementing UI logic, animations, and local data persistence.",
        tech: [
          "React",
          "Next.js",
          "Zustand",
          "TailwindCSS",
          "Framer Motion",
        ],
        link: "https://github.com/FiaLDI/PostCreator",
        isPrivate: false,
      },

      {
        id: 9,
        category: "Legacy",
        title: "TaskManager",
        description:
          "Frontend application for interacting with a JSON-based backend, featuring CRUD operations and basic data transformations.",
        tech: ["React", "Next.js", "Redux", "Tailwind", "TypeScript"],
        link: "https://github.com/FiaLDI/TaskManager",
        isPrivate: false,
      },
      {
        id: 10,
        category: "Legacy",
        title: "Voice Chat — WebRTC Audio Application",
        description:
          "Simple WebRTC-based audio chat application with a custom signaling server, demonstrating real-time communication fundamentals.",
        tech: ["JavaScript", "WebRTC", "Node.js", "Express"],
        link: "https://github.com/FiaLDI/voice-chat",
        isPrivate: false,
      },
      {
        id: 11,
        category: "Core",
        title: "Personal Resume Platform",
        description:
          "Designed and developed a personal resume platform as a foundation for future projects. Built with clean architecture principles, Feature-Sliced Design, and SSR. Supports multi-language (EN/RU), scalable structure, and clear separation of concerns.",
        tech: [
          "Next.js",
          "TypeScript",
          "Feature-Sliced Design",
          "Zustand",
          "SSR",
          "i18n",
          "TailwindCSS",
        ],
        link: "https://github.com/FiaLDI/resume",
        isPrivate: false,
      },
      {
  id: 12,
  category: "Core",
  title: "Exam Helper — Knowledge & Ticket Management System",
  description:
    "Extended the resume platform into a full-featured exam helper system. Implemented ticket and question management, contextual search, and both local-only and server-based modes. Users can publish tickets and browse shared content without real-time communication.",
  tech: [
    "Next.js",
    "TypeScript",
    "Feature-Sliced Design",
    "Zustand",
    "PostgreSQL",
    "Prisma",
    "Full-text search",
    "SSR",
  ],
  link: "https://github.com/FiaLDI/Exam-helper",
  isPrivate: false,
},
{
  id: 13,
  category: "Legacy",
  title: "Multi-step Form",
  description:
    "Early frontend project focused on building a multi-step form with state management, validation, and step-based navigation.",
  tech: ["React", "TypeScript", "CSS"],
  link: "https://github.com/FiaLDI/Multistepform",
  isPrivate: false,
}

    ],
  },


    ru: {
    categoriesMeta: {
      Core:
        "Крупные проекты, в которых я проектировал архитектуру и реализовывал ключевую функциональность.",
      Contribution:
        "Коммерческие и командные проекты с работой в существующих кодовых базах и рамках бизнес-требований.",
      Pet:
        "Pet-проекты для экспериментов, обучения и изучения новых технологий.",
      Legacy:
        "Ранние проекты, демонстрирующие базовые frontend и backend концепции.",
    },

    items: [
      {
        id: 1,
        category: "Core",
        title: "Orbis — платформа real-time коммуникации (Диплом)",
        description:
          "Спроектировал и реализовал платформу реального времени с приватными каналами, ролевым доступом и функциями модерации. Работал с frontend и backend, делая упор на модульную архитектуру и стабильный поток данных.",
        tech: [
          "React",
          "Next.js",
          "Express",
          "Redis",
          "PostgreSQL",
          "Socket.IO",
          "FSD",
        ],
        link: "https://github.com/FiaLDI/Orbis-Diplom",
        isPrivate: false,
      },
      {
        id: 2,
        category: "Core",
        title: "Orbis Game — Sci-Fi Survival (Unity)",
        description:
          "Реализовал игровые системы: мультиплеер, движение, способности, характеристики, баффы, квесты и процедурную генерацию мира. Работал над оптимизацией рендеринга и спавна объектов.",
        tech: [
          "Unity",
          "C#",
          "FishNet",
          "ScriptableObjects",
          "GPU Instancing",
        ],
        link: "https://github.com/FiaLDI/Project-Terraform",
        isPrivate: false,
      },

      {
        id: 3,
        category: "Contribution",
        title: "singlepagestartup — вклад в проект",
        description:
          "Реализовал централизованную обработку HTTP-ошибок и улучшил пагинацию поиска в админ-панели, работая с существующим production-кодом.",
        tech: ["React", "Next.js", "TypeScript"],
        link: "https://github.com/singlepagestartup/singlepagestartup",
        isPrivate: false,
      },
      {
        id: 4,
        category: "Contribution",
        title: "Kultfond RF (частный проект)",
        description:
          "Улучшал адаптивную вёрстку и поведение интерфейса для мобильных устройств на продакшен-сайте.",
        tech: ["React", "Next.js", "TailwindCSS"],
        isPrivate: true,
      },
      {
        id: 5,
        category: "Contribution",
        title: "business.zapaha.net (частный проект)",
        description:
          "Развивал пользовательский интерфейс и реализовывал адаптивные макеты под разные размеры экранов.",
        tech: ["React", "Next.js", "TailwindCSS"],
        isPrivate: true,
      },
      {
        id: 6,
        category: "Contribution",
        title: "didigallery.com (частный проект)",
        description:
          "Разрабатывал новые UI-компоненты и настраивал адаптивное поведение интерфейса согласно бизнес-требованиям.",
        tech: ["React", "Next.js", "TailwindCSS"],
        isPrivate: true,
      },

      {
        id: 7,
        category: "Core",
        title: "Markdown Editor — desktop-приложение (Tauri)",
        description:
          "Кроссплатформенный Markdown-редактор на Next.js и Tauri с упором на desktop-интеграцию, производительность и удобство использования. На данный момент поддерживает базовые функции IDE, в будущем будет добавлена сетевая синхронизация.",
        tech: ["Next.js", "Tauri", "Rust", "TypeScript", "Nest.js", "Zustang"],
        link: "https://github.com/FiaLDI/Markdown-Editor",
        isPrivate: false,
      },
      {
        id: 8,
        category: "Pet",
        title: "PostCreator — инструмент генерации контента",
        description:
          "Веб-инструмент для генерации структурированных постов с UI-логикой, анимациями и локальным хранением данных.",
        tech: [
          "React",
          "Next.js",
          "Zustand",
          "TailwindCSS",
          "Framer Motion",
          "FSD"
        ],
        link: "https://github.com/FiaLDI/PostCreator",
        isPrivate: false,
      },

      {
        id: 9,
        category: "Legacy",
        title: "TaskManager",
        description:
          "Frontend-приложение для работы с JSON backend с реализацией CRUD-операций и базовой обработки данных.",
        tech: ["React", "Next.js", "Redux", "Tailwind", "TypeScript"],
        link: "https://github.com/FiaLDI/TaskManager",
        isPrivate: false,
      },
      {
        id: 10,
        category: "Legacy",
        title: "Voice Chat — WebRTC аудиочат",
        description:
          "Простое WebRTC-приложение с кастомным signaling-сервером, демонстрирующее основы real-time коммуникации.",
        tech: ["JavaScript", "WebRTC", "Node.js", "Express"],
        link: "https://github.com/FiaLDI/voice-chat",
        isPrivate: false,
      },
      {
        id: 11,
        category: "Core",
        title: "Платформа персонального резюме",
        description:
          "Спроектировал и разработал платформу персонального резюме как основу для последующих проектов. Использовал чистую архитектуру, Feature-Sliced Design и SSR. Реализована поддержка нескольких языков (RU/EN), масштабируемая структура и чёткое разделение ответственности.",
        tech: [
          "Next.js",
          "TypeScript",
          "Feature-Sliced Design",
          "Zustand",
          "SSR",
          "i18n",
          "TailwindCSS",
        ],
        link: "https://github.com/FiaLDI/resume",
        isPrivate: false,
      },
      {
        id: 12,
        category: "Pet",
        title: "Exam Helper — система работы с экзаменационными билетами",
        description:
          "Развил платформу резюме в полноценную систему для работы с экзаменационными билетами. Реализовано добавление билетов и вопросов, контекстный поиск, локальный режим и версия с серверной частью. Поддерживается публикация билетов и просмотр контента других пользователей без real-time взаимодействия.",
        tech: [
          "Next.js",
          "TypeScript",
          "Feature-Sliced Design",
          "Zustand",
          "PostgreSQL",
          "Prisma",
          "Полнотекстовый поиск",
          "SSR",
        ],
        link: "https://github.com/FiaLDI/Exam-helper",
        isPrivate: false,
      },
      {
        id: 13,
        category: "Legacy",
        title: "Многошаговая форма",
        description:
          "Ранний frontend-проект с реализацией многошаговой формы, управлением состоянием, валидацией и навигацией по этапам.",
        tech: ["React", "TypeScript", "CSS"],
        link: "https://github.com/FiaLDI/Multistepform",
        isPrivate: false,
      }

    ],
  },
};
