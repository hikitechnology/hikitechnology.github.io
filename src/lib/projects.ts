import { Project } from "@/types";
import { readdir, readFile } from "fs/promises";
import path from "path";

export async function getProjects(): Promise<Project[]> {
  const projectsDir = path.join(process.cwd(), "projects");
  const filenames = await readdir(projectsDir);
  const fileContents = await Promise.all(
    filenames
      .filter((name) => !(name[0] === "_"))
      .map(async (name) => ({
        ...JSON.parse(await readFile(path.join(projectsDir, name), "utf8")),
        id: name.split(".")[0],
      })),
  );
  return fileContents;
}

export async function getProject(id: string): Promise<Project> {
  const projectPath = path.join(process.cwd(), "projects", `${id}.json`);
  const project = JSON.parse(await readFile(projectPath, "utf8"));
  project.id = id;
  return project;
}
