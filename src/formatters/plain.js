import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return String(`'${value}'`);
  }
  return String(value);
};
// const filtredTree = (tree) => tree.filter((node) => node.type !== 'unchanged');
const iter = (tree, parent) => tree.filter((node) => node.type !== 'unchanged').flatMap((node) => {
  switch (node.type) {
    case 'added':
      return `Property '${[...parent, node.key].join('.')}' was added with value: ${stringify(node.value)}`;
    case 'deleted':
      return `Property '${[...parent, node.key].join('.')}' was removed`;
    // case 'unchanged':
    //   return [];
    case 'changed':
      return `Property '${[...parent, node.key].join('.')}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
    case 'nested':
      return `${iter(node.children, [[...parent, node.key].join('.')]).join('\n')}`;
    default:
      throw new Error(`Type: ${node.type} is undefined`);
  }
});

const plain = (diff) => iter(diff, []).join('\n');

export default plain;
