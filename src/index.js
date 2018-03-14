import fs from 'fs';
import _ from 'lodash';

export default (firstJson, secondJson) => {
  const currentFile = JSON.parse(fs.readFileSync(firstJson));
  const changedFile = JSON.parse(fs.readFileSync(secondJson));
  const sharedKeys = _.union(_.keys(currentFile), _.keys(changedFile));

  return sharedKeys.reduce((sum, current) => {
    const currentValue = currentFile[current];
    const changedValue = changedFile[current];
    if (!currentValue) {
      return sum.concat(`+ ${current} : ${changedValue}`);
    } else if (!changedValue) {
      return sum.concat(`- ${current} : ${currentValue}`);
    }
    if (currentValue === changedValue) {
      return sum.concat(`   ${current} : ${currentValue}`);
    }
    return sum.concat(`+ ${current} : ${currentValue}\n - ${current} : ${changedValue}`);
  }, []).join('\n ');
};
