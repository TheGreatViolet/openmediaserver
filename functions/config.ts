import { homedir } from "os"
import { hideSync } from 'hidefile';
import fs from 'fs';
import path from "path";
import { MediaServerConfig } from "types";

export async function generateDefaultConfig(): Promise<MediaServerConfig> {
  const homeDir = homedir();

  fs.mkdirSync(path.join(homeDir, ".openmediaserver"));

  const configFile = path.join(homeDir, ".openmediaserver", "config.json");

  const defaultConfig = {
    mediaLocations: []
  } as MediaServerConfig

  fs.writeFileSync(configFile, JSON.stringify(defaultConfig, null, 2));

  hideSync(path.join(homeDir, ".openmediaserver"));

  return defaultConfig;
}

export async function getConfig(): Promise<MediaServerConfig> {
  const homeDir = homedir();

  const configFile = path.join(homeDir, ".openmediaserver", "config.json");

  try {
    const config = JSON.parse(fs.readFileSync(configFile, "utf8"));

    return config;
  } catch (e) {
    if (e.code === "ENOENT") {
      const config = await generateDefaultConfig();

      return config;
    }
  }
}