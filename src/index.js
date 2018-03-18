import fs from 'fs';
import path from 'path';
import getAst from './getAst';
import render from './renderers';
import parse from './parser';

const parseToObject = (filepath) => {
  const expansion = path.extname(filepath).toLowerCase();
  return parse(expansion, fs.readFileSync(filepath, 'utf-8'));
};

export default (firstPath, secondPath, format = 'main') => {
  const oldObject = parseToObject(firstPath);
  const newObject = parseToObject(secondPath);
  const astTree = getAst(oldObject, newObject);
  return render(format)(astTree);
};
