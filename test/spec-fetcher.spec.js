import {expect} from 'chai'
import path from 'path'
import SpecFetcher from '../src/spec-fetcher'

describe('SpecFetcher', () => {
  it('fetch from file', (done) => {
    const f = new SpecFetcher({path: path.resolve(__dirname, '../test/support/petstore-simple.json')})
    f.fetch().then(content => {
      done()
    })
  })
})
