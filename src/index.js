import getParse from './parser.js';
import getTree from './getTree.js';
import formatStylish from './formatters/stylish.js';

const genDiff = (filepath1, filepath2) => {
  const dataFile1 = getParse(filepath1);
  const dataFile2 = getParse(filepath2);
  const tree = getTree(dataFile1, dataFile2);
  return formatStylish(tree);
};
export default genDiff;
