import { p as promiseResolve, b as bootstrapLazy } from './index-1793929e.js';

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["jointjs-graph-component",[[1,"jointjs-graph-component",{"graphdata":[1]}]]]], options);
});
