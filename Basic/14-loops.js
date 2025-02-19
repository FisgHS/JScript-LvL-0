// Loops o bucles
// Son estructuras de control de flujo que se repiten varias veces

// Bucle for
// for (inicialización; condición; actualización) 

for (let i = 0; i < 5; i++) {
    // Código a repetir
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// Bucle while
// Se ejecuta mientras la condición sea verdadera
// while (condición)

let i = 0

while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// Bucle do while
// Se ejecuta al menos una vez y luego se ejecuta mientras la condición sea verdadera
// do { } while (condición)

i = 6

do {
    console.log(`Hola ${i}`)
    i++
} while ( i < 5) 

// Bucle for of
// Recorre todos los elementos de un objeto iterable (arrays, strings, maps, sets, etc)
// for (variable of iterable)

myArray = [1, 2, 3, 4, 5]

mySet = new Set(["Francisco", "Silva", "Fisg", 23, true, "francisco@fisg.dev"]);

myMap = new Map([
    ['name', 'Francisco'],    
    ['age', 23],
    ['country', 'CL']    
])

myString = "Hola JavaScript"

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// Buenas prácticas
// Siempre revisar que no se produzca un bucle infinito

// break y continue
// break: termina el bucle
// continue: salta a la siguiente iteración

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue
    } else if (i == 8) {
        break
    }
    console.log(`Hola ${i}`)
}
