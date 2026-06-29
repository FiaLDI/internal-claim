export type ProjectCategory = "Core" | "Contribution" | "Pet" | "Legacy";

export interface ProjectItemType {
  id: number;
  category: ProjectCategory;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  isPrivate?: boolean;
}

export type ProjectsDict = {
  categoriesMeta: Record<ProjectCategory, string>;
  items: ProjectItemType[];
};
