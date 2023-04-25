import axios from "axios";
import os from "os";
import fs from "fs-extra";
import path from "path";
import handlebars from "handlebars";

/**
 * Download SVG data from given array of objects containing url
 */
export const downloadSVGsData = async <T extends {}>(
  data: ({ url: string } & T)[]
) => {
  return Promise.all(
    data.map(async (dataItem) => {
      const downloadedSvg = await axios.get<string>(dataItem.url);
      return {
        ...dataItem,
        data: downloadedSvg.data,
      };
    })
  );
};

/**
 * Converts string to PascalCase
 */
export const toPascalCase = (str: string) => {
  return `${str}`
    .replace(/[-_]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(
      /\s+(.)(\w*)/g,
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(/\w/, (s) => s.toUpperCase());
};

export const createIndex = ({
  componentsDirectoryPath,
  indexDirectoryPath,
  indexFileName,
}: {
  componentsDirectoryPath: string;
  indexDirectoryPath: string;
  indexFileName: string;
}) => {
  let indexContent = "";
  let exportContent = ""
  fs.readdirSync(componentsDirectoryPath).forEach((componentFileName) => {
    // Convert name to pascal case
    const componentName = toPascalCase(
      componentFileName.substr(0, componentFileName.indexOf(".")) ||
        componentFileName
    );

    // Compute relative path from index file to component file
    const relativePathToComponent = path.relative(
      indexDirectoryPath,
      path.resolve(componentsDirectoryPath, componentName)
    );

    // Export statement
    const componentExport = `
    import ${componentName} from "./${relativePathToComponent}.vue";
    `;

    indexContent += componentExport + os.EOL;
    exportContent += componentName + ','
  });

  // Write the content to file system
  fs.writeFileSync(
    path.resolve(indexDirectoryPath, indexFileName),
    indexContent + `export {${exportContent}}`
  );
};

export const getTemplate = (filePath: string) => {
  const fileName = path.join(__dirname, filePath);
  const content = fs.readFileSync(fileName).toString();
  return handlebars.compile(content);
};
