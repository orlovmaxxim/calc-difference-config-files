import toStringifyObject from './stringLib';

const renderAst = (astTree) => {
  const res = astTree.map((node) => {
    if (node.hasChild) {
      const goToChild = renderAst(node.children).replace(/\n/g, `\n${'  '.repeat(2)}`);
      return `${'  '.repeat(2)}${node.name}: ${goToChild}`;
    }

    switch (node.typer) {
      case 'notChange':
        return `${'  '.repeat(2)}${node.name}: ${toStringifyObject(node.current)}`;
      case 'remote':
        return `${'  '.repeat(1)}- ${node.name}: ${toStringifyObject(node.current)}`;
      case 'change':
        return `${'  '.repeat(1)}- ${node.name}: ${toStringifyObject(node.current)}\n${'  '.repeat(1)}+ ${node.name}: ${toStringifyObject(node.changed)}`;
      case 'added':
        return `${'  '.repeat(1)}+ ${node.name}: ${toStringifyObject(node.changed)}`;
      default:
        return {};
    }
  });
  return `{\n${res.join('\n')}\n}`;
};

export default renderAst;

