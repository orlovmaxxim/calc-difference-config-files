import _ from 'lodash';

const toStringifyObject = (value, level) => {
  if (_.isObject(value)) {
    const newValue = _.keys(value).map(key => `${'  '.repeat(level + 2)}  ${key}: ${value[key]}`).join('\n');
    return `{\n${newValue}\n${'  '.repeat(level + 1)}}`;
  }
  return value;
};

export default toStringifyObject;
