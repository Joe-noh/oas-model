import config from './rollup.config'

export default Object.assign(config, {
  dest: 'dist/bundle.umd.js',
  format: 'umd',
  moduleName: 'oas-model'
})
