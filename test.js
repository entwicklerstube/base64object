import { expect } from 'chai'

import { encode, decode } from './'

describe('base64object', () => {
  describe('encode', () => {
    it('returns false if nothing is passed', () => {
      expect(encode()).to.equal(false)
    })

    it('returns correct base64 if i pass a simple string', () => {
      expect(encode('base64 me baby')).to.equal('ImJhc2U2NCBtZSBiYWJ5Ig==')
    })

    it('returns correct base64 if i pass a object', () => {
      expect(encode({ hello: 'world' })).to.equal('eyJoZWxsbyI6IndvcmxkIn0=')
    })
  })

  describe('decode', () => {
    it('returns false if nothing is passed', () => {
      expect(decode()).to.equal(false)
    })

    it('returns correct base64 if i pass a simple string', () => {
      expect(decode('ImJhc2U2NCBtZSBiYWJ5Ig==')).to.equal('base64 me baby')
    })

    it('returns correct base64 if i pass a object', () => {
      expect(decode('eyJoZWxsbyI6IndvcmxkIn0=')).to.deep.equal({ hello: 'world' })
    })
  })
})
