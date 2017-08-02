import nodeResolve  from 'rollup-plugin-node-resolve'

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  plugins: [
    nodeResolve({ jsnext: true }),
  ]
}
