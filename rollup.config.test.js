import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import multiEntry from 'rollup-plugin-multi-entry'

export default {
  entry: 'test/**/*.js',
  dest: 'build/test.bundle.js',
  format: 'cjs',
  plugins: [
    nodeResolve({jsnext: true}),
    babel(),
    multiEntry(),
  ],
  external: ['mocha', 'chai'],
  sourceMap: true,
  intro: 'require("source-map-support").install();'
}
