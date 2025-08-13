import { FileText, Mail, Terminal } from "lucide-react";
import { Button } from "../ui/button";
import { Profile } from "@/types";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

type Props = {
  profile: Profile;
};

export default function Header({ profile }: Props) {
  return (
    <header className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="h-8 w-8 text-green-400" />
              <span className="text-green-400 font-mono text-sm">
                ~/portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 mb-2 font-mono tracking-tight">
              My Portfolio
            </h1>
            <div className="text-green-400 font-mono text-lg mb-6">
              <span className="text-zinc-500">{"> "}</span>
              {profile.role}
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-zinc-800/80 backdrop-blur-sm rounded border border-zinc-700/50 text-zinc-300 font-mono hover:border-green-500/30 hover:text-green-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Button
              asChild
              variant="outline"
              className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700 hover:border-green-500/50 text-zinc-300 hover:text-green-400 !px-6"
            >
              <Link href={profile.github} target="_blank">
                <SiGithub className="h-5 w-5" />
                View GitHub
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-700 hover:border-green-500/50 text-zinc-300 hover:text-green-400 !px-6"
            >
              <Link href={`mailto:${profile.email}`}>
                <Mail className="h-5 w-5" />
                Send Email
              </Link>
            </Button>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-500 text-black font-mono font-semibold border border-green-500 shadow-lg shadow-green-500/20 !px-6"
            >
              <Link href={profile.resume} target="_blank">
                <FileText className="h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
