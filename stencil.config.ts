import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'graph-webcomponent',
    buildEs5: true,
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements-bundle',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
        {
            type: 'www',
            copy: [
                {
                    src: '../assets/graphlib.min.js',
                    dest: 'assets/graphlib.min.js'
                }
            ]
        },
        {
            type: 'www',
            copy: [
                {
                    src: '../assets/dagre.min.js',
                    dest: 'assets/dagre.min.js'
                }
            ]
        },
        {
            type: 'www',
            copy: [
                {
                    src: '../assets/jquery.min.js',
                    dest: 'assets/jquery.min.js'
                }
            ]
        },
        {
            type: 'www',
            copy: [
                {
                    src: '../assets/lodash.min.js',
                    dest: 'assets/lodash.min.js'
                }
            ]
        },
        {
            type: 'www',
            copy: [
                {
                    src: '../assets/backbone.min.js',
                    dest: 'assets/backbone.min.js'
                }
            ]
        },
        {
            type: 'www',
            copy: [
                {
                    src: '../assets/joint.min.js',
                    dest: 'assets/joint.min.js'
                }
            ]
        }
    ],
};
