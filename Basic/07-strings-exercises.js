// 1. Concatena dos cadenas de texto

let cadenaConcatenada = "Ejercicio de " + "JavaScript"

// 2. Muestra la longitud de una cadena de texto

console.log(cadenaConcatenada.length)

// 3. Muestra el primer y último carácter de un string

console.log(cadenaConcatenada[0])
console.log(cadenaConcatenada[cadenaConcatenada.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(cadenaConcatenada.toUpperCase())
console.log(cadenaConcatenada.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let cadenaMultiLinea = `Esta es una cadena
de varias lineas
    de textp
    en JavaScript`

// 6. Interpola el valor de una variable en un string

let mensaje = `El mensaje creado fue: ${cadenaMultiLinea}`
console.log(mensaje)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let cadenaSinGuion = "Esta es una cadena con varios espacios en blando y  dobles  espacios"
console.log(cadenaSinGuion.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(cadenaSinGuion.includes("JavaScript"))

// 9. Comprueba si dos strings son iguales

let cadena1 = "Hola"
let cadena2 = "Hola"

console.log(cadena1 === cadena2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(cadena1.length === cadena2.length)