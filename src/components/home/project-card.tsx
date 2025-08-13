import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { SiGithub } from "@icons-pack/react-simple-icons";

type Props = {
  project: Project;
  number: number;
};

export default function ProjectCard({ project, number }: Props) {
  return (
    <Card className="group bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 relative overflow-hidden pt-0 pb-0">
      <Link href={`/projects/${project.id}`} className="flex-1">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <div className="relative w-full h-64 object-cover transition-all duration-500 group-hover:scale-105 filter">
              {project.cardImage !== undefined ? (
                <Image
                  src={project.cardImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : null}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
            {project.inDevelopment && (
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 text-xs bg-green-600 text-black rounded font-mono font-semibold">
                  IN DEVELOPMENT
                </span>
              </div>
            )}
            {number !== undefined && (
              <div className="absolute bottom-3 left-3">
                <span className="text-green-400 font-mono text-xs">
                  [{String(number).padStart(2, "0")}]
                </span>
              </div>
            )}
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-green-400 transition-colors font-mono">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-zinc-800/60 text-zinc-400 rounded border border-zinc-700/50 font-mono hover:border-green-500/30 hover:text-green-400 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Link>
      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {project.live !== undefined && (
          <Link href={project.live} target="_blank">
            <Button
              size="icon"
              variant="secondary"
              className="h-7 w-7 bg-zinc-800/90 hover:bg-zinc-700 border border-zinc-600 text-zinc-300 hover:text-green-400"
            >
              <ExternalLink className="h-3 w-3" />
            </Button>
          </Link>
        )}
        {project.demo !== undefined && (
          <Link href={project.demo} target="_blank">
            <Button
              size="icon"
              variant="secondary"
              className="h-7 w-7 bg-zinc-800/90 hover:bg-zinc-700 border border-zinc-600 text-zinc-300 hover:text-green-400"
            >
              <ExternalLink className="h-3 w-3" />
            </Button>
          </Link>
        )}
        {project.github !== undefined && (
          <Link href={project.github} target="_blank">
            <Button
              size="icon"
              variant="secondary"
              className="h-7 w-7 bg-zinc-800/90 hover:bg-zinc-700 border border-zinc-600 text-zinc-300 hover:text-green-400"
            >
              <SiGithub className="h-3 w-3" />
            </Button>
          </Link>
        )}
      </div>
    </Card>
  );
}
