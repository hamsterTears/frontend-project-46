import { fileURLToPath } from 'url';
import  path from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const extension = ['json'];
const expectedJson = readFileSync('__fixtures__/correct', 'utf-8');

// test.each(extension)('formatters', (ext) => {
//   const fileBefore = getFixturePath(`file1.${ext}`);
//   const fileAfter = getFixturePath(`file2.${ext}`);
//   expect(gendiff(fileBefore, fileAfter, 'json')).toEqual(expectedJson);
// });
expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(expectedJson);
