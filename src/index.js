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
  const currentFile = parseFileToObject(firstFile);
  const changedFile = parseFileToObject(secondFile);
  const astTree = getAst(currentFile, changedFile);
  return render(format)(astTree);
};
