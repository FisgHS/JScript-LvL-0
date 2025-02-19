// 1. Crea una variable para cada operación aritmética

let suma = 5 + 10
let resta = 5 - 10
let multiplicacion = 5 * 10
let division = 5 / 10
let modulo = 5 % 10
let exponenciacion = 5 ** 10
let incremento = 5++
let decremento = 10--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let mayorQue = suma > resta
let menorQue = resta < multiplicacion
let mayorIgualQue = multiplicacion >= division
let menorIgualQue = division <= modulo
let igualdadValor = modulo == exponenciacion
let igualdadIdentidad = exponenciacion === incremento
let diferenteValor = incremento != decremento
let diferenteIdentidad = decremento !== suma

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(10 > 5)
console.log(5 < 10)
console.log(10 >= 5)
console.log(5 <= 10)
console.log(5 == 5)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 > 5)
console.log(10 < 5)
console.log(5 == 10)
console.log(2 === "2")
console.log(5 != 5)

// 5. Utiliza el operador lógico and

let and = 5 > 2 && 2 < 5

// 6. Utiliza el operador lógico or

let or = 5 > 2 || 2 > 5

// 7. Combina ambos operadores lógicos

let andOr = 5 > 2 && 2 > 5 || 5 > 2

// 8. Añade alguna negación

let negacion = !(5 > 2)

// 9. Utiliza el operador ternario

let ternario = 5 > 2 ? "Es mayor" : "Es menor"

// 10. Combina operadores aritméticos, de comparáción y lógicas

let combinado = 5 + 5 > 10 && 5 < 10 ? "Es mayor" : "Es menor"