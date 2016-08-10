const expect = require('chai').expect
const deep = require('../')

describe('require(deep-getset)', () => {
  it('is an object', () => {
    expect(deep).to.be.an('object')
  })

  describe('.get', () => {
    it('is a function', () => {
      expect(deep).to.have.property('get').and.be.a('function')
    })
  })

  describe('.set', () => {
    it('is a function', () => {
      expect(deep).to.have.property('set').and.be.a('function')
    })
  })
})
