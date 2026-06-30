import { FullpageLayout } from "@/features/custom-scroll/ui/FullpageLayout";

import { Hero } from "@/widgets/hero";
import { Skills } from "@/widgets/skills";
import { ProjectList } from "@/widgets/project-list";
import { TimeLine } from "@/widgets/timeline";
import { Contacts } from "@/widgets/contacts";

export default async function Page() {
  return (
    <FullpageLayout
      sections={[
        <Hero key="hero" />,
        <Skills key="skills" />,
        <ProjectList key="projects" />,
        <TimeLine key="timeline" />,
        <Contacts key="contacts" />,
      ]}
    />
  );
}
