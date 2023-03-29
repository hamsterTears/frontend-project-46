// import { readFileSync } from 'fs';
// import { resolve } from 'path';
// import { cwd } from 'process';
import * as yaml from 'js-yaml';
// import { extname } from 'node:path';

// const getDataFile = (pathFile) => readFileSync(resolve(cwd(), pathFile), 'utf-8');

// const getExtension = (pathFile) => extname(pathFile).substring(1);

// function getParse(pathFile) {
//   if (getExtension(pathFile) === 'yml') {
//     return yaml.load(getDataFile(pathFile));
//   } if (getExtension(pathFile) === 'yaml') {
//     return yaml.load(getDataFile(pathFile));
//   }
//   return JSON.parse(getDataFile(pathFile));
// }

// export default getParse;
function getParse(content, format) {
  switch (format) {
    case 'json':
      return JSON.parse(content);
    case 'yml':
    case 'yaml':
      return yaml.load(content);
    default:
      throw new Error(`Extension ${format} is not supported`);
  }
}
export default getParse;
