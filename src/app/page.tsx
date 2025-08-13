import { getProjects } from "@/lib/projects";
import Home from "../page/home";
import { getProfile } from "@/lib/profile";

export default async function Page() {
  const profile = await getProfile();
  const projects = await getProjects();

  return <Home profile={profile} projects={projects} />;
}
