// 1. Crea un función que utilice error correctamente

function errorFuction(valor) {
    try {
        if (valor <= 0) {
            throw new Error('El valor debe ser positivo')
        }
    } catch (error) {
        console.error('Hubo un error:', error.message)
    }
}

errorFuction(-1)

// 2. Crea una función que utilice warn correctamente

function warnFunction(valor) {
    if (valor > 0 || valor < 0) {
        console.warn('El valor no es cero')
    } else {
        console.warn('El valor es cero')
    }
}

warnFunction(1)

// 3. Crea una función que utilice info correctamente

function infoFunction(valor) {
    console.info('El valor es:', valor)
}

infoFunction(1)

// 4. Utiliza table

let data = [
    {nombre: "Barcelona", puntos: 76},
    {nombre: "Real Madrid", puntos: 74},
    {nombre: "Atletico de Madrid", puntos: 73},
]

console.table(data)

// 5. Utiliza group

console.group('Equipos')
console.log('Barcelona')
console.log('Real Madrid')
console.log('Atletico de Madrid')
console.groupEnd()

// 6. Utiliza time

console.time('Tiempo de ejecución')
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.timeEnd('Tiempo de ejecución')

// 7. Valida con assert si un número es positivo

let numero = -1
console.assert(numero >= 0, 'El número debe ser positivo')

// 8. Utiliza count

console.count('Veces')
console.count('Veces')
console.count('Veces')
console.countReset('Veces')
console.count('Veces')

// 9. Utiliza trace

function funcion1() {
    funcion2()
}

function funcion2() {
    funcion3()
}

function funcion3() {
    console.trace()
}

funcion1()

// 10. Utiliza clear

setTimeout(() => {
    console.clear()
}, 5000);