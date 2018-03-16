import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import ini from 'ini';

const mapping = {
  '.yml': yaml.safeLoad,
  '.json': JSON.parse,
  '.ini': ini.decode,
};

export default (file) => {
  const expansion = path.extname(file).toLowerCase();
  return mapping[expansion](fs.readFileSync(file, 'utf-8'));
};
