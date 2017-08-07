import http from 'http'
import fs from 'fs'

export default class SpecFetcher {
  constructor(opts) {
    this.url = opts.url
    this.path = opts.path
  }

  fetch() {
    if (this.url) {
      return this.fetchFromUrl()
    } else {
      return this.fetchFromFile()
    }
  }

  fetchFromUrl() {
    return new Promise((resolve, reject) => {
      http.get(this.url, (res) => {
        res.setEncoding('utf8')

        let body = ''
        res.on('data', (chunk) => { body += chunk })

        res.on('end', () => { resolve(body) })
      }).on('error', (e) => {
        reject(e.message)
      })
    })
  }

  fetchFromFile() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, (error, data) => {
        if (error) { reject(error) }

        resolve(data)
      })
    })
  }
}
