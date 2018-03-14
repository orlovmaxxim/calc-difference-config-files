import fs from 'fs';
import _ from 'lodash';
import yaml from 'js-yaml';
import path from 'path';
import ini from 'ini';


const mapping = {
  '.yml': f => yaml.safeLoad(f),
  '.json': f => JSON.parse(f),
  '.ini': f => ini.decode(f),
};

const parseFileToObject = (file) => {
  const expansion = path.extname(file).toLowerCase();
  return mapping[expansion](fs.readFileSync(file, 'utf-8'));
};

export default (firstFile, secondFile) => {
  const currentFile = parseFileToObject(firstFile);
  const changedFile = parseFileToObject(secondFile);
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
