import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

const extension = ['yaml', 'yml', 'json'];
const expectedJson = readFileSync(getFixturePath('json.txt'), 'utf-8');

test.each(extension)('formatters', (ext) => {
  const fileBefore = getFixturePath(`file1.${ext}`);
  const fileAfter = getFixturePath(`file2.${ext}`);
  expect(gendiff(fileBefore, fileAfter, 'json')).toEqual(expectedJson);
});
