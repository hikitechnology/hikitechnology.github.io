"use client";

import { useState } from "react";
import Background from "@/components/background";
import Header from "@/components/home/header";
import TabButtons from "@/components/tab-buttons";
import ProjectCard from "@/components/home/project-card";
import { Profile, Project } from "@/types";
import Footer from "@/components/footer";

type Props = {
  profile: Profile;
  projects: Project[];
};

export default function Portfolio({ profile, projects }: Props) {
  const [filter, setFilter] = useState<"all" | "inDevelopment">("all");

  const filteredProjects =
    filter === "inDevelopment"
      ? projects.filter((p) => p.inDevelopment)
      : projects;

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
      <Background showAccentBlobs />
      <div className="relative z-10">
        <Header profile={profile} />

        <main className="container mx-auto px-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <TabButtons
                buttons={[
                  { name: "all_projects", onClick: () => setFilter("all") },
                  {
                    name: "in_development",
                    onClick: () => setFilter("inDevelopment"),
                  },
                ]}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  number={index + 1}
                  project={project}
                />
              ))}
            </div>
          </div>
        </main>
        <Footer profile={profile} />
      </div>
    </div>
  );
}
