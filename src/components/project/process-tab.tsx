import { Project } from "@/types";
import { Card, CardContent } from "../ui/card";

type Props = {
  project: Project;
};

export default function ProcessTab({ project }: Props) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6 font-mono">
        <span className="text-green-400">[</span>Development Process
        <span className="text-green-400">]</span>
      </h2>

      <div className="space-y-6">
        {project.process.map((phase, index) => (
          <Card
            key={index}
            className="bg-zinc-900/50 border-zinc-800 hover:border-green-500/30 transition-colors"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-green-400 font-mono text-lg font-bold mt-1">
                  {(index + 1).toString().padStart(2, "0") + "."}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-zinc-100 font-mono">
                      {phase.phase}
                    </h3>
                    <span className="text-green-400 font-mono text-sm">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-zinc-400 mb-4">{phase.description}</p>
                  {phase.deliverables !== undefined && (
                    <div>
                      <span className="text-zinc-500 font-mono text-sm">
                        Deliverables:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {phase.deliverables.map((deliverable, dIndex) => (
                          <span
                            key={dIndex}
                            className="px-2 py-1 text-xs bg-zinc-800/60 text-zinc-400 rounded border border-zinc-700/50 font-mono"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
