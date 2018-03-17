import _ from 'lodash';

const mappingValue = {
  object: () => 'complex value',
  boolean: value => `${value}`,
  string: value => `'${value}'`,
  number: value => `${value}`,
};

const mappingTyper = {
  invested: (node, filepath, f) => f(node.children, filepath),
  notChange: () => ' ',
  change: (node, filepath) => {
    const current = mappingValue[typeof node.current](node.current);
    const changed = mappingValue[typeof node.changed](node.changed);
    return `Property '${filepath}' was updated. From ${current} to ${changed}`;
  },
  added: (node, filepath) => {
    const changed = mappingValue[typeof node.changed](node.changed);
    return `Property '${filepath}' was added with value: ${changed}`;
  },
  remote: (node, filepath) => `Property '${filepath}' was removed`,
};

const renderAst = (astTree) => {
  const iterator = (acc, filepath) =>
    _.flatten(acc.map((node) => {
      if (!filepath.lenght) {
        return mappingTyper[node.typer](node, `${node.name}`, iterator);
      }
      return mappingTyper[node.typer](node, `${filepath}.${node.name}`, iterator);
    })).join('\n');

  return `${iterator(astTree, '')}`.split(' \n').join('');
};

export default renderAst;
