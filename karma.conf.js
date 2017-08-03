const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')
const nodeBuiltins = require('rollup-plugin-node-builtins')
const nodeGlobals = require('rollup-plugin-node-globals')

module.exports = function (config) {
  config.set({
    files: [
      {pattern: 'src/**/*.js', included: false},
      'test/**/*.spec.js',
    ],
    frameworks: ['mocha', 'chai'],
    browsers: ['ChromeHeadless'],
    preprocessors: {
      'src/**/*.js': ['rollup'],
      'test/**/*.spec.js': ['rollup'],
    },
    rollupPreprocessor: {
      plugins: [
        nodeResolve(),
        nodeBuiltins(),
        nodeGlobals(),
        babel(),
      ],
      format: 'iife',
      moduleName: 'oasModel',
      sourceMap: 'inline',
    },
  });
};
