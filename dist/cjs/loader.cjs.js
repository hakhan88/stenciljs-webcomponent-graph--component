'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f729e4e0.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["jointjs-graph-component.cjs",[[1,"jointjs-graph-component",{"graphdata":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
