// Exportacion de modulos
// Modulos es una forma de organizar el codigo en archivos separados

// funciones

export function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

// propiedades

export const PI = 3.1416
export let name = "Juan";

// clases

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// exportacion por defecto
// Solo se puede exportar un valor por defecto por archivo
// esta es unica
// son funciones, objetos, clases, etc

export default function substract(a, b) {
    return a - b;
}

// export default class MyClass {
//     func () {
//         console.log("Hello from MyClass");
//     }
// }