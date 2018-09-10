const alumnos = [
  {
    nombre: 'pepe',
    apellidos: 'pérez'
  },
  {
    nombre: 'juan',
    apellido: 'gomez'
  }
]

const losPepe = alumnos.filter(
  (alumno) => { return alumno.nombre === 'pepe' }
)

console.log(losPepe)
