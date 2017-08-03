import nodeResolve from 'rollup-plugin-node-resolve'
import nodeBuiltins from 'rollup-plugin-node-builtins'
import nodeGlobals from 'rollup-plugin-node-globals'
import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  plugins: [
    nodeResolve({jsnext: true}),
    nodeBuiltins(),
    nodeGlobals(),
    babel()
  ]
}
