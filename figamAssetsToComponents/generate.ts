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
  getTemplate
} from "./utils";

const ICONS_DIRECTORY_PATH = path.resolve(__dirname, "./assets/components");
const SVG_DIRECTORY_PATH = path.resolve(__dirname, "./assets/svgs");
const SVG_FROM_LOCAL = path.resolve(__dirname, './assets/locals');
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
    // choose your current page
    canvas: FIGMA_CANVAS,
  })
  .then(async (svgsData) => {
    // 2.1 Dowload SVG files into Files
    console.log(chalk.blueBright("-> Downloading SVG Files"))
    exporter.downloadSvgs({
      saveDirectory: SVG_DIRECTORY_PATH,
      svgsData: svgsData.svgs,
      lastModified: svgsData.lastModified,
      clearDirectory:true
    })
    // 3. Download SVG files from Figma
    console.log(chalk.blueBright("-> Downloading SVG code"));
    const downloadedSVGsData = await downloadSVGsData(svgsData.svgs);

    // 4. Read manually added SVGs data
    console.log(chalk.blueBright("-> Reading manually added SVGs"));
    let manuallyAddedSvgs: { data: string; name: string }[] = [];
    const svgFiles = fs
      .readdirSync(SVG_FROM_LOCAL)
      // Filter out hidden files (e.g. .DS_STORE)
      .filter((item) => !/(^|\/)\.[^/.]/g.test(item));
    svgFiles.forEach((fileName) => {
      const svgData = fs.readFileSync(
        path.resolve(SVG_FROM_LOCAL, fileName),
        "utf-8"
      );
      manuallyAddedSvgs.push({
        data: svgData,
        name: toPascalCase(fileName.replace(/svg/i, "")),
      });
    });
    const allSVGs = [...downloadedSVGsData,...manuallyAddedSvgs];

    //获取模版
    const iconTemplate = getTemplate("./templates/Icon.hbs");
    const entryTemplate = getTemplate("./templates/entry.hbs");

    // 5. Convert SVG to React Components
    console.log(chalk.cyanBright("-> Converting to Vue components"));

    let iconNameList: Array<{ name: string; component: string }> = [];
    allSVGs.forEach((svg) => {
      const svgCode = svg.data;
      const componentName = toPascalCase(svg.name);
      const componentFileName = `${componentName}.vue`;

      // Converts SVG code into React code using SVGR library
      // Todo:这里的处理很粗糙，暂时只是为了实现的目的
      const newSvgData = svgCode.split('\n')
      //这里来处理多余的标签信息
      const viewBox = newSvgData[0].slice(newSvgData[0].indexOf('viewBox='),newSvgData[0].indexOf('>'))
      const newViewBox = viewBox.slice(8)
      delete(newSvgData[0])
      delete(newSvgData[newSvgData.length - 2])
      iconNameList.push({ name: componentName, component: componentName });
      // 6. Write generated component to file system
      fs.ensureDirSync(ICONS_DIRECTORY_PATH);
      fs.outputFileSync(
        path.resolve(ICONS_DIRECTORY_PATH, componentFileName),
        iconTemplate({ svgCode:newSvgData.join(',').replace(/,/g, ""),viewBox:newViewBox })
      );
    });

    // 7. Generate index.ts
    console.log(chalk.yellowBright("-> Generating index file"));

    fs.writeFileSync(
      `${ICONS_DIRECTORY_PATH}/index.vue`,
      entryTemplate({ iconNameList })
    );
    // createIndex({
    //   componentsDirectoryPath: ICONS_DIRECTORY_PATH,
    //   indexDirectoryPath: INDEX_DIRECTORY_PATH,
    //   indexFileName: "index.ts",
    // });

    console.log(chalk.greenBright("-> All done! ✅"));
  })
  .catch((err: unknown) => {
    console.error(err);
    process.exit(1);
  });
