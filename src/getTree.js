import _ from 'lodash';

const getTree = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortKeys = _.sortBy(keys);

  const result = sortKeys.map((key) => {
    if (_.has(data1, key) && _.has(data2, key)) {
      if (data1[key] === data2[key]) {
        return [`  ${key}: ${data1[key]}`];
        // eslint-disable-next-line no-lone-blocks
      } {
        return [`- ${key}: ${data1[key]}`, `+ ${key}: ${data2[key]}`];
      }
    } else if (_.has(data1, key) && !_.has(data2, key)) {
      return [`- ${key}: ${data1[key]}`];
    } else {
      return [`+ ${key}: ${data2[key]}`];
    }
  });
  const flatResult = result.flat();
  const objectResult = Object.fromEntries(flatResult.map((entry) => entry.split(': ')));

  const diffString = JSON.stringify(objectResult, null, 2);
  return diffString.split('"').join('');
};

export default getTree;
