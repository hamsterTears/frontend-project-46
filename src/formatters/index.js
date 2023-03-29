import formatStylish from './stylish.js';
import getPlain from './plain.js';

const chooseFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return formatStylish(data);
    case 'plain':
      return getPlain(data);
    case 'json':
      return JSON.stringify(data, null);
    default:
      throw new Error(`Invalid format: '${format}'! Use a different format.`);
  }
};

export default chooseFormat;
