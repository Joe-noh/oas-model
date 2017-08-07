import config from './rollup.config'

export default Object.assign(config, {
  dest: 'dist/bundle.es6.js',
  format: 'es',
})
