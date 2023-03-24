import getParse from './parser.js';
import getTree from './getTree.js';

const genDiff = (filepath1, filepath2) => {
  const dataFile1 = getParse(filepath1);
  const dataFile2 = getParse(filepath2);
  return getTree(dataFile1, dataFile2);
};
export default genDiff;
