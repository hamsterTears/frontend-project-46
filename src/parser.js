import * as yaml from 'js-yaml';

function getParse(content, format) {
  switch (format) {
    case 'json':
      return JSON.parse(content);
    case 'yml':
    case 'yaml':
      return yaml.load(content);
    default:
      throw new Error(`Extension ${format} is not supported`);
  }
}
export default getParse;
