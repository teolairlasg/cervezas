const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array')
const _ = require('lodash')
const prueba = function () {
  return 'Esta es mi función de prueba'
}
module.exports = {
  todas: _.sortBy(cervezas, ['nombre']),
  alAzar: uniqueRandomArray(cervezas) // devuelve una función, para llamarla nombreModulo.alAzar()
}
