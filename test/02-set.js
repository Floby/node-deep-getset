const expect = require('chai').expect
const {set} = require('../')

describe('deep.set', () => {
  describe('()', () => {
    it('throws', () => {
      expect(() => set()).to.throw(/deep.set\(object, ...keys, value\): first argument must be an object/i)
    })
  })
  describe('(object)', () => {
    const object = {}
    it('throws', () => {
      expect(() => set(object)).to.throw(/deep.set\(object, ...keys, value\): no keys specified/i)
    })
  })
  describe('(object, key)', () => {
    const object = {}
    it('throws', () => {
      expect(() => set(object, 'a')).to.throw(/deep.set\(object, ...keys, value\): no value specified/i)
    })
  })

  describe('(object, key, value)', () => {
    let object
    beforeEach(() => {object = {}})
    it('sets the value on that key', () => {
      set(object, 'a', 8)
      expect(object).to.deep.equal({a: 8})
    })

    it('returns the set value', () => {
      expect(set(object, 'a', 8)).to.equal(8)
    })

    describe('if the is already set', () => {
      beforeEach(() => { object.a = 10 })
      it('replaces the value', () => {
        set(object, 'a', 8)
        expect(object).to.deep.equal({a: 8})
      })
    })
  })
  describe('(object, [key], value)', () => {
    let object
    beforeEach(() => {object = {}})
    it('sets the value on that key', () => {
      set(object, ['a'], 8)
      expect(object).to.deep.equal({a: 8})
    })

    it('returns the set value', () => {
      expect(set(object, ['a'], 8)).to.equal(8)
    })

    describe('if the is already set', () => {
      beforeEach(() => { object.a = 10 })
      it('replaces the value', () => {
        set(object, ['a'], 8)
        expect(object).to.deep.equal({a: 8})
      })
    })
  })

  describe('(object, key1, key2, key3, value)', () => {
    let object
    beforeEach(() => {
      object = {
        a: {
          b: {}
        }
      }
    })
    describe('when the traversal keys exist', () => {
      it('sets the value in depth', () => {
        set(object, 'a', 'b', 'c', 8)
        expect(object.a.b.c).to.equal(8)
      })
    })
    describe('when the traversal keys do not exist', () => {
      it('sets empty objects', () => {
        set(object, 'x', 'y', 'z', 8)
        expect(object).to.deep.equal({
          a: { b: {} },
          x: { y: { z: 8 } }
        })
      })
    })
  })
  describe('(object, [key1, key2, key3], value)', () => {
    let object
    beforeEach(() => {
      object = {
        a: {
          b: {}
        }
      }
    })
    describe('when the traversal keys exist', () => {
      it('sets the value in depth', () => {
        set(object, ['a', 'b', 'c'], 8)
        expect(object.a.b.c).to.equal(8)
      })
    })
    describe('when the traversal keys do not exist', () => {
      it('sets empty objects', () => {
        set(object, ['x', 'y', 'z'], 8)
        expect(object).to.deep.equal({
          a: { b: {} },
          x: { y: { z: 8 } }
        })
      })
    })
  })

})
