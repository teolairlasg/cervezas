/* global describe it */
const expect = require('chai').expect
const cervezas = require('../src/index')

describe('cervezas', () => {
  describe('La lista de todas', () => {
    it('Debería ser un array de objetos', () => {
      expect(cervezas.todas).to.satisfy(isArrayOfObjects)
    })
    it('Debería incluir la cerveza Ambar', () => {
      expect(cerveza.todas).to.satisfy(tieneMarca('ÁMBAR ESPECIAL'))
    })
  })
  describe('Elegir una cerveza al azar', () => {
    it('Debería mostrar un elemento de la lista de cervezas', () => {

    })
  })
})

const isArrayOfObjects = array => {
  return array.every( item => {
    return typeof item == 'object'
  }
}

const tieneMarca = (array, marca) => {
  return array.some (
    (cerveza,marca) => cerveza.nombre === marva
   )

}