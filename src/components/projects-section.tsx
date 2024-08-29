"use client";

import { useRef, useState } from "react";
import { ProjectTag } from "./project-tag";
import { ProjectsData } from "@/data/projects-data";
import { ProjectCard } from "./projects-card";

export function ProjectSection() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  function handleTagChange(newTag: string) {
    setTag(newTag);
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-black mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.image}
            link={project.link}
          />
        ))}
      </ul>
    </section>
  );
}
