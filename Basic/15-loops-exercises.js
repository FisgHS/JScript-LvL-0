// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

// console.log("Ejercicio 1 for")
// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }

// console.log("Ejercicio 1 while")
// let i = 1
// while (i <= 20) {
//     console.log(i)
//     i++
// }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// console.log("Ejercicio 2 for")
// let suma = 0
// for (let i = 1; i <= 100; i++) {
//     suma += i
// }
// console.log(suma)

// console.log("Ejercicio 2 while")
// let i = 1
// let suma2 = 0
// while (i <= 100) {
//     suma2 += i
//     i++
// }
// console.log(suma2)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// console.log("Ejercicio 3 for")
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// console.log("Ejercicio 3 while")
// let i2 = 1
// while (i2 <= 50) {
//     if (i2 % 2 === 0) {
//         console.log(i2)
//     }
//     i2++
// }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
// let nombres = ["Francisco", "Silva", "Fisg", "JavaScript", "Node.js"]

// console.log("Ejercicio 4 for")
// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i])
// }

// console.log("Ejercicio 4 for of")
// for (let valor of nombres) {
//     console.log(valor)
// }

// console.log("Ejercicio 4 while")
// let i3 = 0
// while (i3 < nombres.length) {
//     console.log(nombres[i3])
//     i3++
// }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// let texto = "Hola JavaScript"
// let vocales = 0
// let vocalesArray = ["a", "e", "i", "o", "u"]

// for (let i = 0; i <= texto.length; i++) {
//     for (vocal of vocalesArray) {
//         if (texto[i] === vocal) {
//             vocales++
//         }
//     }
// }
// console.log(vocales)

// console.log("Ejercicio 5 while")

// let texto2 = "Hola JavaScript"
// let i4 = 0
// let vocales2 = 0
// while (i4 < texto2.length) {
//     if (vocalesArray.includes(texto2[i4].toLowerCase())) {
//         vocales2++
//     }
//     i4++
// }
// console.log(vocales2)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// let numeros = [1, 2, 3, 4, 5]
// let producto = 1

// for (let i = 0; i < numeros.length; i++) {
//     producto *= numeros[i]
// }
// console.log(producto)

// console.log("Ejercicio 6 while")
// let numeros2 = [1, 2, 3, 4, 5]
// let producto2 = 1
// let i5 = 0
// while (i5 < numeros2.length) {
//     producto2 *= numeros2[i5]
//     i5++
// }
// console.log(producto2)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// console.log("Ejercicio 7 for")
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`)
// }

// console.log("Ejercicio 7 while")
// let i=1
// while (i<=10) {
//     console.log(`5 x ${i} = ${5 * i}`)
//     i++
// }

// 8. Usa un bucle para invertir una cadena de texto

// let textoAInvertir = "Hola JavaScript"
// let textoInvertido = ""

// for (let valor of textoAInvertir) {
//     textoInvertido = valor + textoInvertido
// }
// console.log(textoAInvertir)
// console.log(textoInvertido)

// console.log("Ejercicio 8 while")
// let textoAInvertir = "Hola Mundo Chileno"
// let textoInvertido = ""
// let i = textoAInvertir.length - 1

// while (i >= 0) {
//     textoInvertido += textoAInvertir[i]
//     i--
// }
// console.log(textoAInvertir)
// console.log(textoInvertido)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// let fibonacci = [0, 1]
// for (let i = 2; i < 10; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
// }
// console.log(fibonacci)


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30]
let numerosMayoresA10 = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        numerosMayoresA10.push(numeros[i])
    }
}
console.log(numerosMayoresA10)
