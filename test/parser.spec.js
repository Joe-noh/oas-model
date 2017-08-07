import {expect} from 'chai'
import Hello from '../src/main'

describe('Hello', () => {
  it('can be instantiated', () => {
    const hello = new Hello()

    expect(hello).to.be.false
  })
})
