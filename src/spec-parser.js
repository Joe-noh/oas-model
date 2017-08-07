export default class SpecParser {
  constructor(opts) {
    this.validate(opts)

    this.lang = opts.lang
  }

  validate({lang}) {
    if (lang !== 'json') {
      throw 'Only json is supported'
    }
  }

  parse(spec) {
    if (this.lang === 'json') {
      return JSON.parse(spec)
    }
  }
}
