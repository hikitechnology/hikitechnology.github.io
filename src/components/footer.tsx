import { Profile } from "@/types";
import { Terminal } from "lucide-react";

type Props = {
  profile: Profile;
};

export default function Footer({ profile }: Props) {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-green-400" />
            <span className="text-zinc-400 font-mono text-sm">
              © {new Date().getFullYear()} {profile.name}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="text-zinc-400 hover:text-green-400 transition-colors font-mono text-sm"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
