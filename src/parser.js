import yaml from 'js-yaml';
import ini from 'ini';

const mapping = {
  '.yml': yaml.safeLoad,
  '.json': JSON.parse,
  '.ini': ini.decode,
};

export default (exp, file) => mapping[exp](file);
