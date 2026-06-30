"use client";

import { motion } from "framer-motion";
import { ProjectItemType } from "../types/project.types";
import { Github, Lock } from "lucide-react";

export const ProjectItem = ({ project }: { project: ProjectItemType }) => {
  return (
    <motion.article
      layout
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative flex flex-col gap-4 rounded-sm border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-indigo-500/40 hover:bg-neutral-900/70"
    >
      <div className="flex items-start justify-between gap-4">
        <h4
          className="text-lg font-medium leading-snug tracking-tight"
        >
          {project.title}
        </h4>

        <div className="flex items-center gap-2 shrink-0">
          {project.link && !project.isPrivate && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              title="View repository"
              className="text-neutral-500 hover:text-indigo-400 transition-colors"
            >
              <Github size={18} />
            </a>
          )}

          {project.isPrivate && (
            <span
              title="Private repository"
              className="text-neutral-500 cursor-default"
            >
              <Lock size={16} />
            </span>
          )}
        </div>
      </div>
      <p
        className="text-sm text-neutral-300 leading-relaxed"
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 pt-1">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-neutral-800 bg-neutral-950/60 px-2.5 py-1 text-[11px] text-neutral-300 transition-colors group-hover:border-neutral-700"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="pt-2">
        <span
          className="inline-flex items-center gap-2 text-xs text-neutral-400"
        >
          <span
            className="h-1.5 w-1.5 rounded-fullbg-indigo-400"
          />
          {project.category} project
        </span>
      </div>
    </motion.article>
  );
};
