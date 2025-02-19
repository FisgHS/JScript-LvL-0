// Datos primitivos en JavaScript, son datos basicos e inmutables, representan un solo valor, no son objetos y no tienen metodos.

// String (Cadena de texto)
let myName = "Francisco Silva"
let alias = 'Paco'
let email = `francisco@fisg.dev`

// Number (Numero)
let age = 23 // Entero
let height = 1.80 // Decimal

// Boolean (Valor logico)
let isDeveloper = true
let isStudent = false

// Undefined (Indefinido)
let undefinedValue
// console.log(undefinedValue) // undefined

// Null (Nulo) - Representa la ausencia de valor
let nullValue = null

// Symbol (Simbolo) - Valor unico e inmutable, se utiliza como clave para propiedades de objetos
let mySymbol = Symbol("mysymbol")

// BigInt (Numero entero de precision arbitraria) - Son numeros enteros extremadamente grandes para ser representados por el tipo Number
let myBigInt = BigInt(900719925474099132213893271098231)
let myBigInt2 = 900719925474099132213893271098231n

// Mostrar los tipo de datos
console.log(typeof myName) // string
console.log(typeof alias) // string
console.log(typeof email) // string

console.log(typeof age) // number
console.log(typeof height) // number

console.log(typeof isDeveloper) // boolean
console.log(typeof isStudent) // boolean

console.log(typeof undefinedValue) // undefined

console.log(typeof nullValue) // object

console.log(typeof mySymbol) // symbol

console.log(typeof myBigInt) // bigint
console.log(typeof myBigInt2) // bigint