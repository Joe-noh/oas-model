import {expect} from 'chai'
import SpecParser from '../src/spec-parser'

describe('SpecParser', () => {
  it('parses json', () => {
    const p = new SpecParser({lang: 'json'})
    const json = p.parse('{"a": 1}')

    expect(json.a).to.equal(1)
  })

  it('raise if unsupported lang is given', () => {
    expect(() => new SpecParser({lang: 'jsn'})).to.throw()
  })
})
