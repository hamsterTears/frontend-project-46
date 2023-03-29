import fs from 'fs';
import path from 'node:path';

import getParse from './parser.js';
import getTree from './getTree.js';
import chooseFormat from './formatters/index.js';

export const getFixturesPath = (filename) => path.resolve(process.cwd(), filename);

const fileFormat = (file) => {
  const format = path.extname(file).slice(1);
  return format;
};

const fileContent = (file) => {
  const content = fs.readFileSync(file, 'utf8');
  return content;
};

const dataInFile = (filepath) => {
  const format = fileFormat(filepath);
  const content = fileContent(filepath);
  const parsedFile = getParse(content, format);
  return parsedFile;
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const tree = getTree(dataInFile(filepath1), dataInFile(filepath2));
  return chooseFormat(tree, formatName);
};
export default genDiff;

// const genDiff = (filepath1, filepath2, format = 'stylish') => {
//   const dataFile1 = getParse(filepath1);
//   const dataFile2 = getParse(filepath2);
//   const tree = getTree(dataFile1, dataFile2);
//   return chooseFormat(tree, format);
// };
// export default genDiff;
