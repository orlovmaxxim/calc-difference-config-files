import renderAst from './renderAst';
import renderFlatFormat from './renderFlatFormat';

const mappingRenderers = {
  main: renderAst,
  plain: renderFlatFormat,
};

export default format => mappingRenderers[format];
