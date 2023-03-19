/* eslint-disable import/no-extraneous-dependencies */
import { cwd } from 'node:process';
import fs from 'fs';
import { resolve /* extname */ } from 'node:path';
import _ from 'lodash';

const getFullFilePath = (filepath) => resolve(cwd(), filepath);

// const getFormat = (filepath) => extname(filepath).substring(1);

const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');
const parsesFile = (dataFile) => JSON.parse(dataFile);

const genDiff = (filepath1, filepath2) => {
  const pathFile1 = getFullFilePath(filepath1);
  const pathFile2 = getFullFilePath(filepath2);

  const dataFile1 = readFile(pathFile1);
  console.log(parsesFile(dataFile1));
  const dataFile2 = readFile(pathFile2);

  // const formatFile1 = getFormat(filepath1);
  // const formatFile2 = getFormat(filepath2);

  const getTree = (data1, data2) => {
    const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

    const result = keys.map((key) => {
      if (_.has(data1, key) && _.has(data2, key)) {
        if (data1[key] === data2[key]) {
          return [`  ${key}: ${data1[key]}`];
        } else {
          return [`- ${key}: ${data1[key]}`, `+ ${key}: ${data2[key]}`];
          // console.log(`+ ${key}; ${data2[key]}`);
        }
      } else if (_.has(data1, key) && !_.has(data2, key)) {
        return [`- ${key}: ${data1[key]}`];
      } else {
        return [`+ ${key}: ${data2[key]}`];
      };
        // return key;
    });
    const flatResult = result.flat();
    const objectResult = Object.fromEntries(flatResult.map((entry) => entry.split(': ')));

    const diffString = JSON.stringify(objectResult, null, 2);
    return diffString.split('"').join('');
  };


  return getTree(parsesFile(dataFile1), parsesFile(dataFile2));
};
export default genDiff;
