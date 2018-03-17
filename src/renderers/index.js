import renderAst from './renderAst';
import renderFlatFormat from './renderFlatFormat';

const mappingRenderers = {
  main: renderAst,
  flat: renderFlatFormat,
};

export default format => mappingRenderers[format];
