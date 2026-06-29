
import { Language } from "@/shared/lib";
import { TimelineDict } from "../types/timeline.types";

export const TimelineData: Record<Language, TimelineDict> = {
  en: {
    items: [
      {
        id: 1,
        title: "HTML, CSS, basic JavaScript",
        subtitle: "First steps in frontend",
        description:
          "Responsive layouts, Flexbox/Grid, forms, and simple applications using vanilla JavaScript.",
      },
      {
        id: 2,
        title: "First projects",
        subtitle: "Static landing pages and small websites",
        description:
          "Building landing pages and simple commercial projects.",
      },
      {
        id: 3,
        title: "Real-time: WebSocket / WebRTC",
        subtitle: "Live communication applications",
        description:
          "Experiments with data transfer, audio/video streaming, and real-time interaction.",
      },
      {
        id: 4,
        title: "Server-side templating",
        subtitle: "Handlebars, EJS",
        description:
          "SSR on Node.js, dynamic page generation, and server-side rendering.",
      },
      {
        id: 5,
        title: "Databases",
        subtitle: "PostgreSQL, Redis",
        description:
          "Data modeling, querying, optimization, and caching.",
      },
      {
        id: 6,
        title: "Backend with Node.js",
        subtitle: "Express.js and REST APIs",
        description:
          "API architecture, authentication, middleware, and file handling.",
      },
      {
        id: 7,
        title: "Modern frontend",
        subtitle: "React.js",
        description:
          "Components, hooks, state management, and UI architecture.",
      },
      {
        id: 8,
        title: "Fullstack development",
        subtitle: "Next.js, Hono, Bun",
        description:
          "SSR, SSG, API routes, modern runtimes, and fullstack workflows.",
      },
      {
        id: 9,
        title: "Diploma project",
        subtitle: "Interactive platform / social network",
        description:
          "Real-time communication, complex architecture, roles & permissions, scalability.",
      },
      {
        id: 10,
        title: "Unity / C# Game Development",
        subtitle: "Game systems and architecture",
        description:
          "Procedural generation, Ability/Buff systems, optimization, FishNet networking.",
      },
    ],
  },

  ru: {
    items: [
      {
        id: 1,
        title: "HTML, CSS, базовый JavaScript",
        subtitle: "Первые шаги во фронтенде",
        description:
          "Адаптивная вёрстка, Flex/Grid, формы, простые приложения на чистом JS.",
      },
      {
        id: 2,
        title: "Первые проекты",
        subtitle: "Статичные лендинги и небольшие сайты",
        description:
          "Создание посадочных страниц и простых коммерческих проектов.",
      },
      {
        id: 3,
        title: "Real-time: WebSocket / WebRTC",
        subtitle: "Живые коммуникационные приложения",
        description:
          "Эксперименты с передачей данных, аудио/видео, синхронным взаимодействием.",
      },
      {
        id: 4,
        title: "Server-side шаблонизаторы",
        subtitle: "Handlebars, EJS",
        description:
          "SSR на Node.js, генерация динамических страниц и серверный рендеринг.",
      },
      {
        id: 5,
        title: "Базы данных",
        subtitle: "PostgreSQL, Redis",
        description:
          "Моделирование данных, запросы, оптимизация, кэширование.",
      },
      {
        id: 6,
        title: "Backend на Node.js",
        subtitle: "Express.js и REST API",
        description:
          "Архитектура API, авторизация, middleware, работа с файлами.",
      },
      {
        id: 7,
        title: "Современный frontend",
        subtitle: "React.js",
        description:
          "Компоненты, хуки, управление состоянием, UI-архитектура.",
      },
      {
        id: 8,
        title: "Fullstack",
        subtitle: "Next.js, Hono, Bun",
        description:
          "SSR, SSG, API routes, workerd/Bun рантайм, современные фреймворки.",
      },
      {
        id: 9,
        title: "Дипломный проект",
        subtitle: "Интерактивная платформа / соцсеть",
        description:
          "Real-time коммуникации, сложная архитектура, роли и права, масштабируемость.",
      },
      {
        id: 10,
        title: "Unity / C# GameDev",
        subtitle: "Игровые системы и архитектура",
        description:
          "Процедурная генерация, Ability/Buff системы, оптимизация, FishNet.",
      },
    ],
  },
};
