// import _ from 'lodash';
// import parseFileToObject from './parser';

import getAst from './getAst';
import renderAst from './renderAst';
import parseFileToObject from './parser';

// export default (firstFile, secondFile) => {
//   const currentFile = parseFileToObject(firstFile);
//   const changedFile = parseFileToObject(secondFile);
//   const sharedKeys = _.union(_.keys(currentFile), _.keys(changedFile));

//   console.log(currentFile);
//   return sharedKeys.reduce((sum, current) => {
//     const currentValue = currentFile[current];
//     const changedValue = changedFile[current];
//     if (!currentValue) {
//       return sum.concat(`+ ${current} : ${changedValue}`);
//     } else if (!changedValue) {
//       return sum.concat(`- ${current} : ${currentValue}`);
//     }
//     if (currentValue === changedValue) {
//       return sum.concat(`   ${current} : ${currentValue}`);
//     }
//     return sum.concat(`+ ${current} : ${currentValue}\n - ${current} : ${changedValue}`);
//   }, []).join('\n ');
// };

export default (firstFile, secondFile) => {
  const currentFile = parseFileToObject(firstFile);
  const changedFile = parseFileToObject(secondFile);
  const astTree = getAst(currentFile, changedFile);
  // console.log(astTree);
  return renderAst(astTree);
};
