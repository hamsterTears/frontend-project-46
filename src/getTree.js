import _ from 'lodash';

const getTree = (data1, data2) => {
  const data1Keys = _.keys(data1);
  const data2Keys = _.keys(data2);
  const sortedKeys = _.sortBy(_.union(data1Keys, data2Keys));

  return sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { key, type: 'deleted', value: data1[key] };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { key, type: 'nested', children: getTree(data1[key], data2[key]) };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key, type: 'changed', value1: data1[key], value2: data2[key],
      };
    }

    return { key, type: 'unchanged', value: data1[key] };
  });
};
//   const keys = _.union(Object.keys(data1), Object.keys(data2));
//   const sortKeys = _.sortBy(keys);

//   const result = sortKeys.map((key) => {
//     if (_.has(data1, key) && _.has(data2, key)) {
//       if (data1[key] === data2[key]) {
//         return [`  ${key}: ${data1[key]}`];
//         // eslint-disable-next-line no-lone-blocks
//       } {
//         return [`- ${key}: ${data1[key]}`, `+ ${key}: ${data2[key]}`];
//       }
//     } else if (_.has(data1, key) && !_.has(data2, key)) {
//       return [`- ${key}: ${data1[key]}`];
//     } else {
//       return [`+ ${key}: ${data2[key]}`];
//     }
//   });
//   const flatResult = result.flat();
//   const objectResult = Object.fromEntries(flatResult.map((entry) => entry.split(': ')));

//   const diffString = JSON.stringify(objectResult, null, 2);
//   return diffString.split('"').join('');
// };

export default getTree;
