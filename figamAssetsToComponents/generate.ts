// generate.ts
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import dotenv from "dotenv";
import figmaApiExporter from "figma-api-exporter";
import {
  createIndex,
  downloadSVGsData,
  toPascalCase,
} from "./utils";

const ICONS_DIRECTORY_PATH = path.resolve(__dirname, "./assets/components");
const SVG_DIRECTORY_PATH = path.resolve(__dirname, "./assets/svgs");
const INDEX_DIRECTORY_PATH = path.resolve(__dirname, "./assets");

// Load environment variables
dotenv.config();

// 1. Retrieve Figma Access Token, File ID and Canvas from .env file
const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN;
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID;
const FIGMA_CANVAS = process.env.FIGMA_CANVAS;

if (
  !FIGMA_API_TOKEN ||
  !FIGMA_FILE_ID ||
  !FIGMA_CANVAS ||
  FIGMA_API_TOKEN === "NOT SET"
) {
  console.error("Environment Variables not set.");
  process.exit(1);
}

// 2. Fetch icons metadata from Figma
console.log(chalk.magentaBright("-> Fetching icons metadata"));
const exporter = figmaApiExporter(FIGMA_API_TOKEN);
exporter
  .getSvgs({
    fileId: FIGMA_FILE_ID,
    canvas: FIGMA_CANVAS,
  })
  .then(async (svgsData) => {
    // 3. Download SVG files from Figma
    console.log(chalk.blueBright("-> Downloading SVG code"));
    const downloadedSVGsData = await downloadSVGsData(svgsData.svgs);

    // 4. Read manually added SVGs data
    console.log(chalk.blueBright("-> Reading manually added SVGs"));
    let manuallyAddedSvgs: { data: string; name: string }[] = [];
    const svgFiles = fs
      .readdirSync(SVG_DIRECTORY_PATH)
      // Filter out hidden files (e.g. .DS_STORE)
      .filter((item) => !/(^|\/)\.[^/.]/g.test(item));
    svgFiles.forEach((fileName) => {
      const svgData = fs.readFileSync(
        path.resolve(SVG_DIRECTORY_PATH, fileName),
        "utf-8"
      );
      manuallyAddedSvgs.push({
        data: svgData,
        name: toPascalCase(fileName.replace(/svg/i, "")),
      });
    });
    const allSVGs = [...downloadedSVGsData, ...manuallyAddedSvgs];

    // 5. Convert SVG to React Components
    console.log(chalk.cyanBright("-> Converting to Vue components"));
    allSVGs.forEach((svg) => {
      const svgCode = svg.data;
      const componentName = toPascalCase(svg.name);
      const componentFileName = `${componentName}.vue`;

      // Converts SVG code into React code using SVGR library
      const componentCode = `<template>
      ${svgCode}
      </template>`;

      // 6. Write generated component to file system
      fs.ensureDirSync(ICONS_DIRECTORY_PATH);
      fs.outputFileSync(
        path.resolve(ICONS_DIRECTORY_PATH, componentFileName),
        componentCode
      );
    });

    // 7. Generate index.ts
    console.log(chalk.yellowBright("-> Generating index file"));
    createIndex({
      componentsDirectoryPath: ICONS_DIRECTORY_PATH,
      indexDirectoryPath: INDEX_DIRECTORY_PATH,
      indexFileName: "index.ts",
    });

    console.log(chalk.greenBright("-> All done! ✅"));
  })
  .catch((err: unknown) => {
    console.error(err);
    process.exit(1);
  });
