import _ from 'lodash';

const valueStatus = [
  {
    type: 'invested',
    isThisType: (key, oldObject, newObject) =>
      _.isObject(oldObject[key]) && _.isObject(newObject[key]),
    action: (key, oldObject, newObject, f) => ({ children: f(oldObject[key], newObject[key]) }),
  },
  {
    type: 'notChange',
    isThisType: (key, oldObject, newObject) =>
      oldObject[key] === newObject[key] && _.has(oldObject, key) && _.has(newObject, key),
    action: (key, oldObject) => ({ oldValue: oldObject[key] }),
  },
  {
    type: 'change',
    isThisType: (key, oldObject, newObject) =>
      oldObject[key] !== newObject[key] && _.has(oldObject, key) && _.has(newObject, key),
    action: (key, oldObject, newObject) => ({ oldValue: oldObject[key], newValue: newObject[key] }),
  },
  {
    type: 'added',
    isThisType: (key, oldObject, newObject) => !_.has(oldObject, key) && _.has(newObject, key),
    action: (key, oldObject, newObject) => ({ newValue: newObject[key] }),
  },
  {
    type: 'remote',
    isThisType: (key, oldObject, newObject) => _.has(oldObject, key) && !_.has(newObject, key),
    action: (key, oldObject) => ({ oldValue: oldObject[key] }),
  },
];


const getAst = (oldObject, newObject) => {
  const sharedKeys = _.union(_.keys(oldObject), _.keys(newObject));

  return sharedKeys.map((key) => {
    const { type, action } = _.find(valueStatus, ({ isThisType }) =>
      isThisType(key, oldObject, newObject));
    const { oldValue, newValue, children } = action(key, oldObject, newObject, getAst);
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
