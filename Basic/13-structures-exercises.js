// 1. Crea un array que almacene cinco animales

let animals = ["perro","gato","conejo","pajaro","pez"]
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift("leon")
animals.push("elefante")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2,1)
console.log(animals)

// 4. Crea un set que almacene cinco libros

let books = new Set(["La vida es bella","Condorito","Papelucho","El principito","Games of thrones"])
console.log(books)

// 5. Añade dos más. Uno de ellos repetido

books.add("El senor de los anillos")
books.add("Condorito")

console.log(books)

// 6. Elimina uno concreto a tu elección

books.delete("Papelucho")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre

let monthMap = new Map([
    [1,"Enero"],
    [2,"Febrero"],
    [3,"Marzo"],
    [4,"Abril"],
    [5,"Mayo"],
    [6,"Junio"],
    [7,"Julio"],
    [8,"Agosto"],
    [9,"Septiembre"],
    [10,"Octubre"],
    [11,"Noviembre"],
    [12,"Diciembre"],
])
console.log(monthMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
// console.log(monthMap.has(5))

if(monthMap.has(5)){
    console.log(monthMap.get(5))
} else {
    console.log("No existe")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

monthMap.set("Verano",["Junio","Julio","Agosto"])
console.log(monthMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array = ["a","b","c","d","e"]
let set = new Set(array)
let map = new Map([["set",set]])
console.log(map)