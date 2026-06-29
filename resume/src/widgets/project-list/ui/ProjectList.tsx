"use client";

import { ProjectItem } from "@/entities/project";
import { useDict } from "@/shared/lib";
import { useProjectCategories } from "../model/useProjectCategories";
import { ActiveCategory } from "@/shared/ui/animation";

export const ProjectList = () => {
  const data = useDict("ProjectWidget");
  const items = useDict("projects");

  const {
    activeCategory,
    setActiveCategory,
    grouped,
    categories,
  } = useProjectCategories(items.items);

  return (
    <div
      id="project"
      data-scrollable
      className="min-h-screen w-full lg:h-screen lg:overflow-y-auto lg:no-scrollbar"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 text-white relative">
        <div className="flex w-full justify-center">
          <h2
            className="text-4xl lg:text-5xl font-semibold tracking-tight text-center"
          >
            {data.title}
            <div className="h-0.5 w-[350px] mt-3 px-6 bg-indigo-500 shadow-[0_0_5px_0.5px_rgba(99,102,241,0.9)]"></div>
          </h2>
        </div>
        <div className="space-y-10 pb-32 pt-5">
          {categories.map((category) => (
            <ActiveCategory
              key={`project-category-${category}`}
              category={category}
              setActiveCategory={setActiveCategory}
              isActive={activeCategory === category}
            >
              <div className="relative z-10 mb-10 max-w-3xl">
                <h3
                  className="text-2xl font-medium tracking-tight mb-2"
                >
                  {category}
                </h3>

                <p
                  className="text-sm text-neutral-400 leading-relaxed"
                >
                  {items.categoriesMeta[category]}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {grouped[category].map((project) => (
                  <ProjectItem
                    key={`project-${project.id}`}
                    project={project}
                  />
                ))}
              </div>
            </ActiveCategory>
          ))}
        </div>
      </div>
    </div>
  );
};
