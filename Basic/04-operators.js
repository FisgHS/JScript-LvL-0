// Operadores - son utilizados para realizar operaciones en variables y valores.

// Operadores aritméticos
// +, -, *, /, %, ++, --

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Modulo - el resto de la division lo que sobra
console.log(a ** b) // Exponenciación - 10^5

a++
console.log(a) // Incremento - a = a + 1

b--
console.log(b) // Decremento - a = a - 1

// Operadores de asignación
let myVar = 2
console.log(myVar)

myVar += 2 // myVar = myVar + 2
console.log(myVar)

myVar -= 2 // myVar = myVar - 2
console.log(myVar)

myVar *= 2 // myVar = myVar * 2
console.log(myVar)

myVar /= 2 // myVar = myVar / 2
console.log(myVar)

myVar %= 2 // myVar = myVar % 2
console.log(myVar)

myVar**= 2 // myVar = myVar ** 2
console.log(myVar)

// Operadores de comparación - se utilizan para comparar valores y devolver un resultado booleano
// ==, ===, !=, !==, >, <, >=, <=

console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == b) // Igualdad por valor
console.log(a == 6) // Igualdad por valor
console.log(a == "6") // Igualdad por valor
console.log(a === a) // Igual por identidad - valor y tipo de dato
console.log(a === 6) // Igual por identidad - valor y tipo de dato
console.log(a === "6") // Igual por identidad - valor y tipo de dato
console.log(a != 6) // Diferente por valor
console.log(a !== "6") // Diferente por valor

console.log(0 == false) // true
console.log(1 == false) // false
console.log(2 == false) // false

console.log(0 == "") // false
console.log(0 == " ") // false
console.log(0 == '') // false
console.log(0 == "Hola") // false
console.log(0 === "") // false
console.log(undefined == null) // true
console.log(undefined === null) // false

// Truthy Values (valores verdaderos)
/*
    Todos los numeros positivos y negativos menos el cero
    Todas las cadenas de texto menos la cadena vacia
    El valor booleano true
*/ 

// Falsy Values (valores falsos)
/*
    0
    0n
    null
    undefined
    NaN
    El boolean false
    La cadena de texto vacia
*/

// Operadores lógicos - nos permite comparar valores, y devolver un resultado booleano
// &&, ||, !

// and (&&)
console.log(5 > 10 && 15 > 20) 
console.log(5 < 10 && 15 < 20) 
console.log(5 < 10 && 15 > 20) 
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

console.log(5 > 10 && 15> 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20)) 

// Operador ternario
// condicion ? expresion1 : expresion2

const isRaining = false

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")