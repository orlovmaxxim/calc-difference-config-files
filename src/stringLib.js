import _ from 'lodash';

const toStringifyObject = (obj) => {
  if (_.isObject(obj)) {
    const jsonObj = JSON.stringify(obj, null, '    ').replace(/"(.*)": "(.*)"/g, '$1: $2');
    return jsonObj.replace(/\n/g, `\n${'  '.repeat(2)}`);
  }
  return obj.toString();
};

export default toStringifyObject;
