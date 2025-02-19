// Functions

// Declaracion de una funcion

// Simple
function myFunc() {
    console.log("Hola Funcion!");
}
// Llamada a la funcion
myFunc();

// Con parametros

function myFunctionWithParams(name) {
    console.log("Hola " + name + "!");
}

myFunctionWithParams("Juan");
myFunctionWithParams("Silva");

// Funciones anonimas
// Se asigna a una variable

const myFunc2 = function(name) {
    console.log("Hola " + name + "!");
}

myFunc2("Juan Perez");

// Arrow functions
// Se asigna a una variable 
// Se usa la flecha => para definir la funcion y se omite la palabra function y el return si es una sola linea
const myFunc3 = (name) => {
    console.log("Hola " + name + "!");
}

const myFunc4 = (name) => console.log("Hola " + name + "!")

myFunc3("Juan Alberto");
myFunc4("Juan Alberto2");

// Parametros

function sum(a, b) {
    console.log(a + b);
}

sum(2, 3);
sum(2);
sum();

// Parametros por defecto
function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum(2, 3)
defaultSum(2)
defaultSum()
defaultSum(b = 5)

// Retorno de valores
function mult(a, b) {
    return a * b
}

let result = mult(2, 3)
console.log(result)

// Funciones anidadas

function externalFunction() {
    console.log("Funcion externa")
    function internalFunction() {
        console.log("Funcion interna")
    }
    internalFunction()
}

externalFunction()
// internalFunction() // Error porque no esta definida fuera de la funcion

// Funciones de orden superior
// Son funciones que reciben como parametro otra funcion

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "Funcion de orden superior")

// forEach
myArray = [1, 2, 3, 4]

mySet = new Set(["Francisco", "Silva", "Fisg", 23, true, "francisco@fisg.dev"]);

myMap = new Map([
    ['name', 'Francisco'],    
    ['age', 23],
    ['country', 'CL']    
])

myArray.forEach((value) => console.log(value))

myArray.forEach((value) => {
    console.log(value)
})

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))