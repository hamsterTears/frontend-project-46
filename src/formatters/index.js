import stylish from './stylish.js';
import plain from './plain.js';

const chooseFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data, null);
    default:
      throw new Error(`Invalid format: '${format}'! Use a different format.`);
  }
};

export default chooseFormat;
