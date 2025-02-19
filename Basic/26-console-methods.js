// Console

// log

console.log('Hola, JavaScript!') 

// error

console.error('Este es un mensaje de error') 
console.error('Error al conectar con la base de datos', new Error('Error de conexión'))

// warn

console.warn('Este es un mensaje de advertencia')

// info

console.info('Este es un mensaje de información')

// table

let data = [
    ["Francisco", 23],
    ["Nacho", 18],
]

console.table(data)

data = [
    {name: "Francisco", age: 23},
    {name: "Nacho", age: 18},
]

console.table(data)

// group

console.group('Usuario')
console.log('Nombre: Francisco')
console.log('Edad: 23')
console.groupEnd()

console.log('akjsdhajsd')

// time
console.time('Tiempo de ejecución 1')
for (let i = 0; i < 10000; i++) {

}

console.time('Tiempo de ejecución 2')
for (let i = 0; i < 10000; i++) {
}

console.timeEnd('Tiempo de ejecución 1')

console.timeEnd('Tiempo de ejecución 2')

// assert

let age = 17
console.assert(age >= 18, 'Debes ser mayor de edad')

// count

console.count('Click')
console.count('Click')
console.count('Click')
console.countReset('Click')
console.count('Click')

// trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace('Seguimiento de la ejecución') 
}

funcA()

// clear

// console.clear()