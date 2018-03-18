import fs from 'fs';
import path from 'path';
import getAst from './getAst';
import render from './renderers';
import parse from './parser';

const parseFileToObject = (filepath) => {
  const expansion = path.extname(filepath).toLowerCase();
  return parse(expansion, fs.readFileSync(filepath, 'utf-8'));
};

export default (firstFile, secondFile, format = 'main') => {
  const oldFile = parseFileToObject(firstFile);
  const newFile = parseFileToObject(secondFile);
  const astTree = getAst(oldFile, newFile);
  return render(format)(astTree);
};
