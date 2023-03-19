import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import  path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const extension = ['json'];
const expectedFile = fs.readFileSync(getFixturePath('correctFile'), 'utf-8');
console.log(expectedFile);

test.each(extension)('genDiff test', (ext) => {
  const file1 = getFixturePath(`file1.${ext}`);
  const file2 = getFixturePath(`file2.${ext}`);
  expect(genDiff(file1, file2, 'json')).toStrictEqual("{\n  - follow: false,\n    host: hexlet.io,\n  - proxy: 123.234.53.22,\n  - timeout: 50,\n  + timeout: 20,\n  + verbose: true\n}");
});

