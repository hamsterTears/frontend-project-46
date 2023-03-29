import getParse from './parser.js';
import getTree from './getTree.js';
import chooseFormat from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const dataFile1 = getParse(filepath1);
  const dataFile2 = getParse(filepath2);
  const tree = getTree(dataFile1, dataFile2);
  return chooseFormat(tree, format);
};
export default genDiff;
