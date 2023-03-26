import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
// import * as yaml from 'js-yaml';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
// const extension = ['json', 'yaml', 'yml'];
// const expectedFile = fs.readFileSync(getFixturePath('correctFile'), 'utf-8');

// test.each(extension)('genDiff test', (ext) => {
test('json', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');

  expect(genDiff(file1, file2)).toEqual(readFile('stylish.txt'));
  expect(genDiff(file1, file2, 'stylish')).toEqual(readFile('stylish.txt'));
});
//   expect(genDiff(file1, file2, 'json')).toStrictEqual(expectedFile);
// });

test('yaml/yml', () => {
  const file3 = getFixturePath('file1.yaml');
  const file4 = getFixturePath('file2.yml');

  expect(genDiff(file3, file4)).toEqual(readFile('stylish.txt'));
  expect(genDiff(file3, file4, 'stylish')).toEqual(readFile('stylish.txt'));
});
//   expect(genDiff(file3, file4, 'yaml')).toStrictEqual(expectedFile);
// });
