import _ from 'lodash';

const valueStatus = [
  {
    type: 'invested',
    isThisType: (key, oldFile, newFile) =>
      _.isObject(oldFile[key]) && _.isObject(newFile[key]),
    action: (key, oldFile, newFile, f) => ({ children: f(oldFile[key], newFile[key]) }),
  },
  {
    type: 'notChange',
    isThisType: (key, oldFile, newFile) =>
      oldFile[key] === newFile[key] && _.has(oldFile, key) && _.has(newFile, key),
    action: (key, oldFile) => ({ oldValue: oldFile[key] }),
  },
  {
    type: 'change',
    isThisType: (key, oldFile, newFile) =>
      oldFile[key] !== newFile[key] && _.has(oldFile, key) && _.has(newFile, key),
    action: (key, oldFile, newFile) => ({ oldValue: oldFile[key], newValue: newFile[key] }),
  },
  {
    type: 'added',
    isThisType: (key, oldFile, newFile) => !_.has(oldFile, key) && _.has(newFile, key),
    action: (key, oldFile, newFile) => ({ newValue: newFile[key] }),
  },
  {
    type: 'remote',
    isThisType: (key, oldFile, newFile) => _.has(oldFile, key) && !_.has(newFile, key),
    action: (key, oldFile) => ({ oldValue: oldFile[key] }),
  },
];


const getAst = (oldFile, newFile) => {
  const sharedKeys = _.union(_.keys(oldFile), _.keys(newFile));

  return sharedKeys.map((key) => {
    const { type, action } = _.find(valueStatus, ({ isThisType }) =>
      isThisType(key, oldFile, newFile));
    const { oldValue, newValue, children } = action(key, oldFile, newFile, getAst);
    return {
      typer: type,
      name: key,
      oldValue,
      newValue,
      children,
    };
  });
};

export default getAst;
