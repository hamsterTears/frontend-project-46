import fs from 'fs';
import path from 'path';

import getParse from './parser.js';
import getTree from './getTree.js';
import chooseFormat from './formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);

const getData = (filepath) => getParse(
  fs.readFileSync(filepath, 'utf8'),
  extractFormat(filepath),
);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(getFullPath(filepath1));
  const data2 = getData(getFullPath(filepath2));
  const tree = getTree(data1, data2);
  return chooseFormat(tree, formatName);
};
export default genDiff;
