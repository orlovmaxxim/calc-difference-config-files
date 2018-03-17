import _ from 'lodash';

const valueStatus = [
  {
    type: 'invested',
    isThisType: (key, curFile, changedFile) =>
      _.isObject(curFile[key]) && _.isObject(changedFile[key]),
    action: (key, curFile, changedFile, f) => ({ children: f(curFile[key], changedFile[key]) }),
  },
  {
    type: 'notChange',
    isThisType: (key, curFile, changedFile) =>
      curFile[key] === changedFile[key] && _.has(curFile, key) && _.has(changedFile, key),
    action: (key, curFile) => ({ current: curFile[key] }),
  },
  {
    type: 'change',
    isThisType: (key, curFile, changedFile) =>
      curFile[key] !== changedFile[key] && _.has(curFile, key) && _.has(changedFile, key),
    action: (key, curFile, changedFile) => ({ current: curFile[key], changed: changedFile[key] }),
  },
  {
    type: 'added',
    isThisType: (key, curFile, changedFile) => !_.has(curFile, key) && _.has(changedFile, key),
    action: (key, curFile, changedFile) => ({ changed: changedFile[key] }),
  },
  {
    type: 'remote',
    isThisType: (key, curFile, changedFile) => _.has(curFile, key) && !_.has(changedFile, key),
    action: (key, curFile) => ({ current: curFile[key] }),
  },
];


const getAst = (currentFile, changedFile) => {
  const sharedKeys = _.union(_.keys(currentFile), _.keys(changedFile));

  return sharedKeys.map((key) => {
    const { type, action } = _.find(valueStatus, ({ isThisType }) =>
      isThisType(key, currentFile, changedFile));
    const { current, changed, children } = action(key, currentFile, changedFile, getAst);
    return {
      typer: type,
      name: key,
      current,
      changed,
      children,
    };
  });
};

export default getAst;
