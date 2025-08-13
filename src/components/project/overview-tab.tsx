import { Project } from "@/types";
import { Card, CardContent } from "../ui/card";
import { DynamicIcon } from "lucide-react/dynamic";
import { useState } from "react";
import { Code2 } from "lucide-react";

type Props = {
  project: Project;
};

export default function OverviewTab({ project }: Props) {
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(
    null,
  );

  return (
    <div className="space-y-8">
      {/* Features */}
      <section>
        <h2 className="text-2xl font-bold text-zinc-100 mb-6 font-mono">
          <span className="text-green-400">[</span>Features
          <span className="text-green-400">]</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.features.map((feature, index) => (
            <Card
              key={index}
              className="bg-zinc-900/50 border-zinc-800 hover:border-green-500/30 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-green-400 mt-1">
                    {<DynamicIcon name={feature.icon} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-2 font-mono">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Challenges */}
      <section>
        <h2 className="text-2xl font-bold text-zinc-100 mb-6 font-mono">
          <span className="text-green-400">[</span>Key Challenges
          <span className="text-green-400">]</span>
        </h2>
        <div className="space-y-4">
          {project.challenges.map((challenge, index) => (
            <Card
              key={index}
              className="bg-zinc-900/50 border-zinc-800 hover:border-green-500/30 transition-colors cursor-pointer"
              onClick={() =>
                setSelectedChallenge(selectedChallenge === index ? null : index)
              }
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-zinc-100 font-mono">
                    {challenge.problem}
                  </h3>
                  <Code2
                    className={`h-5 w-5 transition-colors ${selectedChallenge === index ? "text-green-400" : "text-zinc-500"}`}
                  />
                </div>
                <p className="text-zinc-400 mb-4">{challenge.solution}</p>
                {selectedChallenge === index && (
                  <div className="bg-zinc-950/80 rounded border border-zinc-700 p-4 font-mono text-sm">
                    <pre className="text-green-400 overflow-x-auto">
                      <code>{challenge.code}</code>
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
