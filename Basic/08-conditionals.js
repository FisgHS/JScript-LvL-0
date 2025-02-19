// if, else if, else

// if (si)

let age = 23;

if (age >= 18) {
  console.log("You are an adult");
} 

// else (si no)

if (age >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("No eres mayor de edad");
} 

// else if (si no, si)
if (age >= 18) {
    console.log("Eres mayor de edad");
} else if (age < 18) {
    console.log("Eres menor de edad, sal de acá");
} else {
    console.log("No eres mayor de edad");
} 

// Operadores Ternarios

const message = age >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(message);

// Switch - comparar una unica variable con multiples valores
// El switch es muy legible cuando se tienen multiples valores a comparar
// Es muy eficiente cuando se tienen multiples valores a comparar
// Es meno flexible que el if else
// Es mmuy necesario el break para que no se siga ejecutando el codigo

let day = 7;
let dayName

switch (day) {
    case 0 :
        dayName = "Lunes"
        break
    case 1 :
        dayName = "Martes"
        break
    case 2 :
        dayName = "Miercoles"
        break
    case 3 :
        dayName = "Jueves"
        break
    case 4 :
        dayName = "Viernes"
        break
    case 5 :
        dayName = "Sabado"
        break
    case 6 :
        dayName = "Domingo"
        break
    default :
        dayName = "Numero invalido"
}

console.log(dayName);

