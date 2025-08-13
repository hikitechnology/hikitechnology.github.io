import { Profile } from "@/types";
import { readFile } from "fs/promises";
import path from "path";

export async function getProfile(): Promise<Profile> {
  const filePath = path.join(process.cwd(), "profile.json");
  const profile = await JSON.parse(await readFile(filePath, "utf8"));
  return profile;
}
