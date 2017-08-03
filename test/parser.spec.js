import Parser from '../src/parser'
import path from 'path'

describe('Parser', () => {
  let parser;

  beforeEach(() => {
    parser = new Parser()
  })

  it('can accept url', () => {
    parser.parse({url: 'https://example.com/openapi.json'})
  })

  it('can accept path', () => {
    console.log('hey');
    const filePath = path.resolve(__dirname, './support/swagger.json')
    parser.parse({path: filePath})
  })
})
