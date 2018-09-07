const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array')
const prueba = function () {
  return 'Esta es mi función de prueba'
}
module.exports = {
  todas: cervezas,
  alAzar: uniqueRandomArray(cervezas)() // devuelve una función, para que sea un objeto añadimos ( )
}
