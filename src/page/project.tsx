"use client";

import { useState } from "react";
import { Profile, Project as ProjectType } from "@/types";
import Background from "@/components/background";
import Header from "@/components/project/header";
import TabButtons from "@/components/tab-buttons";
import OverviewTab from "@/components/project/overview-tab";
import TechTab from "@/components/project/tech-tab";
import ProcessTab from "@/components/project/process-tab";
import Footer from "@/components/footer";

type Props = {
  profile: Profile;
  project: ProjectType;
};

export default function Project({ profile, project }: Props) {
  const [activeTab, setActiveTab] = useState<"overview" | "tech" | "process">(
    "overview",
  );

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 relative overflow-hidden">
      <Background />
      <div className="relative z-10 flex-1">
        <Header project={project} />

        <div className="container mx-auto px-6 mb-8">
          <div className="max-w-4xl mx-auto">
            <TabButtons
              buttons={[
                {
                  name: "overview",
                  onClick: () => setActiveTab("overview"),
                },
                {
                  name: "tech_stack",
                  onClick: () => setActiveTab("tech"),
                },
                {
                  name: "dev_process",
                  onClick: () => setActiveTab("process"),
                },
              ]}
            />
          </div>
        </div>

        {/* Content */}
        <main className="container mx-auto px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            {activeTab === "overview" && <OverviewTab project={project} />}

            {activeTab === "tech" && <TechTab project={project} />}

            {activeTab === "process" && <ProcessTab project={project} />}
          </div>
        </main>
      </div>
      <Footer profile={profile} />
    </div>
  );
}
