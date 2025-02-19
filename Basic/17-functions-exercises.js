// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

const sum = (a, b) => a + b;
console.log(sum(2, 3));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

arrayNums = [1,5,2,4,1,6,9,3,2]
const maxNum = (array) => Math.max(...array);
console.log(maxNum(arrayNums));


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

const vocales = (string) => {
    let cuenta = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < string.length; i++){
        if (vocales.includes(string[i].toLowerCase())){
            cuenta++;
        }
    }
    return cuenta;
}

console.log(vocales('Hola JavaScript'));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

const mayusculas = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i].toUpperCase());
    }
    return newArray;
}

console.log(mayusculas(['hola', 'javascript', 'mundo']));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
// Los numeros primos son aquellos que solo son divisibles entre 1 y ellos mismos

const esPrimo = (numero) => {
    if (numero < 2) return false;
    for (let i = 2; i < numero; i++){
        if (numero % i === 0) return false;
    }
    return true;
}

console.log(esPrimo(7));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

const comunes = (array1, array2) => {
    return array1.filter(elemento => array2.includes(elemento))
}

const array1 = [1,4,6,2,1,6,8]
const array2 = [2,7,3,1,6,8,9]

console.log(comunes(array1,array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

const sumaArray = (arrayNum) => {
    let resultado = 0
    for (numero of arrayNum){
        resultado += numero
    }
    return resultado
}

arrayNum = [1,2,3,4,5,6,7,8,9,10]
console.log(sumaArray(arrayNum))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function numerosAlCuadrado(arrayNum) {
    let newArray = []
    for(numero of arrayNum) {
        newArray.push(numero**2)
    }
    return newArray
} 

console.log(numerosAlCuadrado(arrayNum))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirTexto(texto){
    let i = texto.length - 1
    let txtInvertido = ""
    while (i >= 0){
        txtInvertido += texto[i]
        i--
    }
    return txtInvertido
}

console.log(invertirTexto("Hola Mundo JS"))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(numero){
    let resultado = 1
    for (let i = 1; i <= numero; i++){
        resultado *= i
    }
    return resultado
}

console.log(factorial(5))