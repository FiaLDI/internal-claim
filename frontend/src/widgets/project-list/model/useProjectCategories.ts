import { useRef, useState, useMemo } from "react";
import {  ProjectItem,
  ProjectCategory,
  ProjectItemType,} from "@/entities/project";

interface UseProjectCategoriesResult {
  containerRef: React.RefObject<HTMLElement | null>;
  activeCategory: ProjectCategory | null;
  setActiveCategory: (category: ProjectCategory) => void;
  grouped: Record<ProjectCategory, ProjectItemType[]>;
  categories: ProjectCategory[];
}

export function useProjectCategories(
  items: ProjectItemType[]
): UseProjectCategoriesResult {
  const containerRef = useRef<HTMLElement | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory | null>(null);

  const grouped = useMemo(() => {
    return items.reduce((acc, project) => {
      (acc[project.category] ??= []).push(project);
      return acc;
    }, {} as Record<ProjectCategory, ProjectItemType[]>);
  }, [items]);

  const categories = useMemo(
    () => Object.keys(grouped) as ProjectCategory[],
    [grouped]
  );

  return {
    containerRef,
    activeCategory,
    setActiveCategory,
    grouped,
    categories,
  };
}
