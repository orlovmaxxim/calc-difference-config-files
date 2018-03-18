import renderAst from './renderAst';
import renderFlatFormat from './renderFlatFormat';
import renderJsonFormat from './renderJsonFormat';

const mappingRenderers = {
  main: renderAst,
  plain: renderFlatFormat,
  json: renderJsonFormat,
};

export default format => mappingRenderers[format];
