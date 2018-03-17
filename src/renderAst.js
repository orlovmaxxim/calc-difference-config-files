import _ from 'lodash';
import toStringifyObject from './stringLib';

const mappingTyper = {
  invested: (node, level, f) => `${'  '.repeat(level)}  ${node.name}: {\n${f(node.children, level + 2)}\n${'  '.repeat(level + 1)}}`,
  notChange: (node, level) => `${'  '.repeat(level)}  ${node.name}: ${node.current}`,
  change: (node, level) => `${'  '.repeat(level)}- ${node.name}: ${toStringifyObject(node.current, level)}\n${'  '.repeat(level)}+ ${node.name}: ${toStringifyObject(node.changed, level)}`,
  added: (node, level) => `${'  '.repeat(level)}+ ${node.name}: ${toStringifyObject(node.changed, level)}`,
  remote: (node, level) => `${'  '.repeat(level)}- ${node.name}: ${toStringifyObject(node.current, level)}`,
};

const renderAst = (astTree) => {
  const iterator = (acc, deepLevel) =>
    _.flatten(acc.map(node => mappingTyper[node.typer](node, deepLevel, iterator))).join('\n');
  return `{\n${iterator(astTree, 1)}\n}`;
};

export default renderAst;
