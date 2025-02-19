
myArray = [1, 2, 3, 4, 5]

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

myValue = myArray[1]
console.log(myValue)

myName = person.name
console.log(myName)

// Desestructuracion
// Extraer valores de un objeto o array y asignarlos a variables
// Con una unica definicion se pueden crear multiples variables y asignarles valores

// Sintaxis array
let [myValue0, myValue1, myValue2, myValue3, myValue4, myValue5] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)

// Sintaxis array con valores por defecto
let [myValue6, myValue7, myValue8, myValue9, myValue10, myValue11 = 0] = myArray
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)
console.log(myValue10)
console.log(myValue11)

// Ignorar elementos del array

let [myValue12, , , myValue14, myValue15] = myArray
console.log(myValue12)
console.log(myValue14)
console.log(myValue15)

// Sintaxis objeto
let {name, age, city} = person
console.log(name)
console.log(age)
console.log(city)

// Sintaxis objeto con valores por defecto
let {name2, age2, city2, email = "email@email.com"} = person
console.log(name2) // No existe
console.log(age2) // No existe
console.log(city2) // No existe
console.log(email) // No existe

// Sintaxis objeto con nuevos nombres de variables

let {name: name3, age: age3, city: city3} = person
console.log(name3)
console.log(age3)
console.log(city3)

// Objetos anidados
let person3 = {
    name: "Francisco",
    age: 23,
    alias: "Fisg",
    walk: function() {
        console.log("Walking...");
    },
    job: {
        name: "Developer",
        exp: 1,
        work: function() {
            console.log(`La persona trabaja hace ${this.exp} años`);
        }
    }
};

let {name: name4, job: {name: jobName}} = person3

console.log(name4)
console.log(jobName)

// Propagacion (...)
// Permite expandir elementos de un array o objeto a otros array o objeto

// Sintaxis array
let myArray2 = [...myArray, 6, 7] // Copia de un array
console.log(myArray2)

// Copia de array
let myArray3 = [...myArray] 
console.log(myArray3)

// Combinacion de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

// Sintaxis objeto
let person4 = {...person, email: "email@email.com"}
console.log(person4)

// Copia de objeto
let person5 = {...person}
console.log(person5)