import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft, ExternalLink, Terminal } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types";
import { SiGithub } from "@icons-pack/react-simple-icons";

type Props = { project: Project };

export default function Header({ project }: Props) {
  return (
    <header className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700 hover:border-green-500/50 text-zinc-300 hover:text-green-400"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
            <Terminal className="h-4 w-4" />
            <span>~/projects/{project.id}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2 font-mono tracking-tight">
              {project.title}
            </h1>
            <div className="text-green-400 font-mono text-lg mb-4">
              <span className="text-zinc-500">{">"}</span> {project.tagline}
            </div>
            {project.longDescription.split("\n").map((line, index) => (
              <p
                className="text-zinc-400 text-lg leading-relaxed pb-3"
                key={index}
              >
                {line}
              </p>
            ))}

            <div className="flex gap-4 mb-6 pt-3">
              {project.live !== undefined && (
                <Link href={project.live} target="_blank">
                  <Button className="bg-green-600 hover:bg-green-500 text-black font-mono font-semibold">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Link
                  </Button>
                </Link>
              )}
              {project.demo !== undefined && (
                <Link href={project.demo} target="_blank">
                  <Button className="bg-green-600 hover:bg-green-500 text-black font-mono font-semibold">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo Link
                  </Button>
                </Link>
              )}
              {project.github !== undefined && (
                <Link href={project.github} target="_blank">
                  <Button
                    variant="outline"
                    className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700 hover:border-green-500/50 text-zinc-300 hover:text-green-400 font-mono"
                  >
                    <SiGithub className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </Link>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-zinc-500 font-mono">Status:</span>
                <div className="text-green-400 font-mono">{project.status}</div>
              </div>
              <div>
                <span className="text-zinc-500 font-mono">Timeline:</span>
                <div className="text-zinc-300 font-mono">
                  {project.timeline}
                </div>
              </div>
              <div>
                <span className="text-zinc-500 font-mono">Role:</span>
                <div className="text-zinc-300 font-mono">{project.role}</div>
              </div>
              <div>
                <span className="text-zinc-500 font-mono">Team:</span>
                <div className="text-zinc-300 font-mono">{project.team}</div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-full min-h-100">
            <Image
              src={project.projectImage}
              alt={project.title}
              fill
              className="object-contain"
              style={{
                filter: "drop-shadow(0 0 0.75rem rgba(0, 255, 0, 0.2)",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
