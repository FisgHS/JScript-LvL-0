// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Silva";

if (nombre === "Silva") {
    console.log(nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Silva";
let contraseña = "1234";

if (usuario === "Silva" && contraseña === "1234") {
    console.log("Bienvenido, login correcto");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 0;

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else if (numero == 0) {
    console.log("El número es 0");
} else {
    console.log("El número no es un número");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 17;

if (edad >= 18) {
    console.log("Puede votar");
} else {
    console.log(`No puede votar, le faltan ${18 - edad} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edad2 = 23;
let status = edad2 >= 18 ? "adulto" : "menor";

console.log(status);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 2;
let estacion;

if (mes >= 1 && mes <= 3) {
    estacion = "Primavera";
} else if (mes >= 4 && mes <= 6) {
    estacion = "Verano";
} else if (mes >= 7 && mes <= 9) {
    estacion = "Otoño";
}
else if (mes >= 10 && mes <= 12) {
    estacion = "Invierno";
} else {
    estacion = "Mes incorrecto";
}

console.log(estacion);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch

switch (mes) {
    case 1:
        console.log("31 días");
        break;
    case 2:
        console.log("28 días");
        break;
    case 3:
        console.log("31 días");
        break;
    case 4:
        console.log("30 días");
        break;
    case 5:
        console.log("31 días");
        break;
    case 6:
        console.log("30 días");
        break;
    case 7:
        console.log("31 días");
        break;
    case 8:
        console.log("31 días");
        break;
    case 9:
        console.log("30 días");
        break;
    case 10:
        console.log("31 días");
        break;
    case 11:
        console.log("30 días");
        break;
    case 12:
        console.log("31 días");
        break;
    default:
        console.log("Mes incorrecto");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "en"
let mensaje

switch (idioma) {
    case "es":
        mensaje = "Hola";
        break;
    case "en":
        mensaje = "Hello";
        break;
    case "fr":
        mensaje = "Bonjour";
        break;
    default:
        mensaje = "Idioma no soportado";
}

console.log(mensaje);

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let mes2 = 5;
let estacion2;

switch (mes2) {
    case 1:
    case 2:
    case 3:
        estacion2 = "Primavera";
        break;
    case 4:
    case 5:
    case 6:
        estacion2 = "Verano";
        break;
    case 7:
    case 8:
    case 9:
        estacion2 = "Otoño";
        break;
    case 10:
    case 11:
    case 12:
        estacion2 = "Invierno";
        break;
    default:
        estacion2 = "Mes incorrecto";
}

console.log(estacion2);
// 10. Usa un switch para hacer de nuevo el ejercicio 7
