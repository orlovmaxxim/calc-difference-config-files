import { stringify } from '../stringLib';

const mappingTyper = {
  invested: (node, filepath, f) => f(node.children, filepath),
  notChange: () => ' ',
  change: (node, filepath) => `Property '${filepath}' was updated. From ${stringify(node.current)} to ${stringify(node.changed)}`,
  added: (node, filepath) => `Property '${filepath}' was added with value: ${stringify(node.changed)}`,
  remote: (node, filepath) => `Property '${filepath}' was removed`,
};

const renderAst = (astTree) => {
  const iterator = (acc, filepath) =>
    acc.map((node) => {
      if (!filepath.lenght) {
        return mappingTyper[node.typer](node, `${node.name}`, iterator);
      }
      return mappingTyper[node.typer](node, `${filepath}.${node.name}`, iterator);
    }).join('\n');

  return `${iterator(astTree, '')}`.split(' \n').join('');
};

export default renderAst;
