// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let array1 = [10, 11, 12]
let [valor1, valor2] = array1

console.log(valor1)
console.log(valor2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [valor3, valor4, valor5, valor6 = 0] = array1
console.log(valor3)
console.log(valor4)
console.log(valor5)
console.log(valor6)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let persona = {
    nombre: "Francisco",
    edad: 23,
}

let {nombre, edad} = persona
console.log(nombre)
console.log(edad)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {nombre: nombre1, edad: edad1} = persona
console.log(nombre1)
console.log(edad1)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let persona2 = {
    nombre: "Pancho",
    edad: 32,
    trabajo: {
        nombre: "Programador",
        experiencia: 2
    }
}

let {nombre: nombrePersona2, edad: edadPersona2, trabajo: {nombre: nombreTrabajo, experiencia: experienciaTrabajo}} = persona2
console.log(nombrePersona2)
console.log(edadPersona2)
console.log(nombreTrabajo)
console.log(experienciaTrabajo)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let arrayProp1 = [5,4,3,2,1]
let arrayProp2 = [9,8,7,6]

let arrayProp3 = [...arrayProp1, ...arrayProp2]

console.log(arrayProp3)

// 7. Usa propagación para crear una copia de un array

let arrayCopy = [...arrayProp3]
console.log(arrayCopy)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let ciudad = {
    nombre: "Talagante",
    poblacion: 123456
}
let persona3 = {...persona2, ciudad: {...ciudad}}
console.log(persona3)

// 9. Usa propagación para crear una copia de un objeto

let personaCopy = {...persona3}
console.log(personaCopy)

// 10. Combina desestructuración y propagación
let {nombre: nombrePersona3, edad: edadPersona3, ...resto} = persona3
console.log(nombrePersona3)
console.log(edadPersona3)
console.log(resto)