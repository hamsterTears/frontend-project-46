import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const extension = ['json'];
const expectedFile = fs.readFileSync(getFixturePath('correctFile'), 'utf-8');

test.each(extension)('genDiff test', (ext) => {
  const file1 = getFixturePath(`file1.${ext}`);
  const file2 = getFixturePath(`file2.${ext}`);
  expect(genDiff(file1, file2, 'json')).toStrictEqual(expectedFile);
});
