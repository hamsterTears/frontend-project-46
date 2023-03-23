import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import * as yaml from 'js-yaml';
import { extname } from 'node:path';

const getDataFile = (pathFile) => readFileSync(resolve(cwd(), pathFile), 'utf-8');

const getExtension = (pathFile) => extname(pathFile).substring(1);

function getParse(pathFile) {
  if (getExtension(pathFile) === 'yml' || getExtension(pathFile) === 'yaml') {
    return yaml.load(getDataFile(pathFile));
  }
  return JSON.parse(getDataFile(pathFile));
}

export default getParse;
