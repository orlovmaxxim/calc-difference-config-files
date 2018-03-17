import getAst from './getAst';
import render from './renderers';
import parseFileToObject from './parser';

export default (firstFile, secondFile, format = 'main') => {
  const currentFile = parseFileToObject(firstFile);
  const changedFile = parseFileToObject(secondFile);
  const astTree = getAst(currentFile, changedFile);
  return render(format)(astTree);
};
