import { p as promiseResolve, b as bootstrapLazy } from './index-1793929e.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["jointjs-graph-component",[[1,"jointjs-graph-component",{"graphdata":[1]}]]]], options);
  });
};

export { defineCustomElements };
