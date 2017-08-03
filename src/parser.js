import * as fs from 'fs'

class Parser {
  constructor () {}

  parse (params) {
    if (params.url) {
      this.parseUrl(params.url)
    } else if (params.path) {
      this.parseFile(params.path)
    }
  }

  parseUrl (url) {
    console.log(url);
  }

  parseFile (path) {
    console.log(fs);
    const json = JSON.parse(fs.readFile(path, 'utf8'))
    console.log(json)
  }
}

export default Parser
