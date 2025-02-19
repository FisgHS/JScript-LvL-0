/* 
Almacenar valores en memoria para utilizarlos en el futuro
Los nombres de las variables deben ser descriptivos y en lowerCamelCase
Existen 3 palabras reservadas para declarar variables
- var
- let
- const
*/

// Declarar una variable
// var, es la manera original de declarar variables, actualmente no se recomienda su uso
console.log(helloWorld); // undefined

var helloWorld = "Hello, JavaScript!";
console.log(helloWorld);

helloWorld = "Hello, World JavaScript!";
console.log(helloWorld);

// let, estas variables solo son accesibles en el bloque donde se declaran
console.log(helloWorld2); // Error: helloWorld2 is not defined

let helloWorld2 = "Hello, JavaScript 2!";
console.log(helloWorld2);

helloWorld2 = "Hello, World JavaScript 2!";
console.log(helloWorld2);

// const, estas variables no pueden ser reasignadas
const helloWorld3 = "Hello, JavaScript 3!";
console.log(helloWorld3);

// Error: Assignment to constant variable.
// helloWorld3 = "Hello, World JavaScript 3!";
// console.log(helloWorld3);