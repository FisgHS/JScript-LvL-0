// array 

// declaracion de un array

let myArray = [] // es la mas simple y rapida, siendo asi la recomendada
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicializacion de un array

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4, 5]
myArray2 = new Array(1, 2, 3, 4, 5)

console.log(myArray)
console.log(myArray2)

myArray = ["Silva", "Francisco", "Dev", 23, true]
myArray2 = new Array("Silva", "Francisco", "Dev", 23, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Silva"
// myArray2[1] = "Francisco"
myArray2[0] = "Dev"

console.log(myArray2)

myArray = []
myArray[2] = "Silva"
// myArray[1] = "Francisco"
myArray[0] = "Dev"

console.log(myArray)

// Metodos comunes

myArray = []

// push Y pop

myArray.push("Silva") // agrega un elemento al final del array
myArray.push("Francisco") // agrega un elemento al final del array
myArray.push("Dev") // agrega un elemento al final del array
myArray.push(23) // agrega un elemento al final del array

console.log(myArray)

console.log(myArray.pop()) // elimina el ultimo elemento del array y lo devuelve
myArray.pop() // elimina el ultimo elemento del array

console.log(myArray)

myArray.shift() // elimina el primer elemento del array
console.log(myArray)

myArray.unshift("Silva", "Paco") // agrega un elemento al principio del array
console.log(myArray)

//length

console.log(myArray.length) // devuelve la cantidad de elementos del array

// clear
// myArray.clear() // este metodo no existe
myArray = []
// myArray.length = 0 // alternativa para limpiar un array, no muy recomendadad
console.log(myArray)

// slice

myArray = ["Silva", "Francisco", "Dev", 23, true]

// devuelve un nuevo array con los elementos desde la posicion 1 hasta la 3
// el primer parametro es la posicion de inicio y el segundo parametro es la posicion de fin
// si no se especifica el segundo parametro, se toma hasta el final del array
// toma los elementos desde la posicion 1 hasta la 3, sin incluir la posicion 3
let myNewArray = myArray.slice(1, 3) 

console.log(myArray)
console.log(myNewArray)

// splice


// elimina 3 elementos desde la posicion 1
myArray.splice(1, 3) 
console.log(myArray)

myArray = ["Silva", "Francisco", "Dev", 23, true]

// elimina 2 elementos desde la posicion 1 y agrega "Nuevo"
myArray.splice(1, 2, "Nuevo")
console.log(myArray)