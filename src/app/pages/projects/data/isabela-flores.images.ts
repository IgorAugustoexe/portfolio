import type { StaticImageData } from "next/image";
import type { ProjectImage } from "../models/project.model";

declare const require: {
  context(directory: string, recursive: boolean, pattern: RegExp): {
    (fileName: string): { default: StaticImageData };
    keys(): string[];
  };
};

const screenshots = require.context(
  "../../../../assets/images/projects/IsabelaFlores/screenshots",
  false,
  /\.(png|jpe?g|webp|avif)$/i,
);

export const isabelaFloresImages: ProjectImage[] = screenshots
  .keys()
  .sort((first, second) => first.localeCompare(second, "en", { numeric: true }))
  .map((fileName, index) => ({
    src: screenshots(fileName).default,
    alt: {
      pt: `Tela ${index + 1} do aplicativo Isabela Flores`,
      en: `Isabela Flores app screen ${index + 1}`,
    },
  }));
