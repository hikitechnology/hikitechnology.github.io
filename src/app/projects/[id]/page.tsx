import { getProfile } from "@/lib/profile";
import { getProject, getProjects } from "@/lib/projects";
import Project from "@/page/project";
import { Metadata } from "next";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ id: project.id }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = await getProject(id);
  return {
    title: project.title,
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const project = await getProject(id);
  const profile = await getProfile();

  return <Project profile={profile} project={project} />;
}
