import _ from 'lodash';

const mappingValue = {
  object: () => 'complex value',
  boolean: value => `${value}`,
  string: value => `'${value}'`,
  number: value => `${value}`,
};

export const toStringifyObject = (value, level) => {
  if (_.isObject(value)) {
    const newValue = _.keys(value).map(key => `${'  '.repeat(level + 2)}  ${key}: ${value[key]}`).join('\n');
    return `{\n${newValue}\n${'  '.repeat(level + 1)}}`;
  }
  return value;
};

export const stringify = value => mappingValue[typeof value](value);
