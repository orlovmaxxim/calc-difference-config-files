import _ from 'lodash';

const valueStatus = {
  invested: (beforeValue, afterValue) => _.isObject(beforeValue) && _.isObject(afterValue),
  notChange: (beforeValue, afterValue) => beforeValue === afterValue,
  change: (beforeValue, afterValue) => beforeValue && afterValue,
  added: (beforeValue, afterValue) => typeof (beforeValue) === 'undefined',
  remote: (beforeValue, afterValue) => typeof (afterValue) === 'undefined',
};

const getAst = (currentFile, changedFile) => {
  const sharedKeys = _.union(_.keys(currentFile), _.keys(changedFile));

  return sharedKeys.map((key) => {
    const currentValue = currentFile[key];
    const changedValue = changedFile[key];
    const type = _.keys(valueStatus).find(o => valueStatus[o](currentValue, changedValue));
    // console.log(type);
    if (type !== 'invested') {
      return {
        typer: type,
        name: key,
        current: currentValue,
        changed: changedValue,
        children: [],
      };
    }
    return { name: key, hasChild: true, children: getAst(currentValue, changedValue) };
  });
};

export default getAst;
