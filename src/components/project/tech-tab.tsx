import { Project } from "@/types";
import { Card, CardContent } from "../ui/card";
import { DynamicIcon } from "lucide-react/dynamic";

type Props = {
  project: Project;
};

export default function TechTab({ project }: Props) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6 font-mono">
        <span className="text-green-400">[</span>Technology Stack
        <span className="text-green-400">]</span>
      </h2>
      {project.techStack.map((category, index) => (
        <Card key={index} className="bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-green-400">
                <DynamicIcon name={category.icon} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 font-mono">
                {category.category}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {category.items.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex items-start gap-3 p-3 bg-zinc-800/30 rounded border border-zinc-700/50"
                >
                  <div className="text-green-400 text-sm font-mono mt-1">
                    [{String(techIndex + 1).padStart(2, "0")}]
                  </div>
                  <div>
                    <div className="text-zinc-100 font-mono font-semibold">
                      {tech.name}
                    </div>
                    <div className="text-zinc-400 text-sm">
                      {tech.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
