const expect = require('chai').expect
const {get} = require('../')

describe('deep.get', () => {
  describe('()', () => {
    it('returns undefined', () => {
      expect(get()).to.be.undefined
    })
  })

  describe('(object)', () => {
    const object = {}
    it('returns object', () => {
      expect(get(object)).to.equal(object)
    })
  })

  describe('(object, key)', () => {
    const object = { a: 8 }
    describe('when that key exists', () => {
      it('returns object[key]', () => {
        expect(get(object, 'a')).to.equal(8)
      })
    })

    describe('when that key does not exist', () => {
      it('return undefined', () => {
        expect(get(object, 'b')).to.be.undefined
      })
    })
  })

  describe('(object, [key])', () => {
    const object = { a: 8 }
    describe('when that key exists', () => {
      it('returns object[key]', () => {
        expect(get(object, ['a'])).to.equal(8)
      })
    })

    describe('when that key does not exist', () => {
      it('returns undefined', () => {
        expect(get(object, ['b'])).to.be.undefined
      })
    })
  })

  describe('(object, key1, key2, key3)', () => {
    const object = {
      a: {
        b: {
          c: 8
        },
        d: null
      }
    }
    describe('when all keys exist', () => {
      it('returns object[key1][key2][key3]', () => {
        expect(get(object, 'a', 'b', 'c')).to.equal(8)
      })
    })

    describe('when one of the keys does not exist', () => {
      it('returns undefined', () => {
        expect(get(object, 'a', 'z', 'c')).to.be.undefined
      })
    })

    describe('when the value there is falsy', () => {
      it('returns it', () => {
        expect(get(object, 'a', 'd')).to.equal(null)
      })
    })
    describe('when traversing a falsy value', () => {
      it('returns undefined', () => {
        expect(get(object, 'a', 'd', 'e')).to.be.undefined
      })
    })
    describe('when object is undefined', () => {
      it('returns undefined', () => {
        expect(get(undefined, 'a', 'b', 'c')).to.be.undefined
      })
    })
  })

  describe('(object, [key1, key2, key3])', () => {
    const object = {
      a: {
        b: {
          c: 8
        },
        d: null
      }
    }
    describe('when all keys exist', () => {
      it('returns object[key1][key2][key3]', () => {
        expect(get(object, ['a', 'b', 'c'])).to.equal(8)
      })
    })

    describe('when one of the keys does not exist', () => {
      it('returns undefined', () => {
        expect(get(object, ['a', 'z', 'c'])).to.be.undefined
      })
    })

    describe('when the value there is falsy', () => {
      it('returns it', () => {
        expect(get(object, ['a', 'd'])).to.equal(null)
      })
    })
    describe('when traversing a falsy value', () => {
      it('returns undefined', () => {
        expect(get(object, ['a', 'd', 'e'])).to.be.undefined
      })
    })
  })

})

