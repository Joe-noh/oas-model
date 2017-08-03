const babel = require('rollup-plugin-babel')

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
        babel(),
      ],
      format: 'iife',
      moduleName: 'oasModel',
      sourceMap: 'inline',
    },
  });
};
