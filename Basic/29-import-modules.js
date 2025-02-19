// Importacion de modulos

import { add, PI, name, Circle } from "./28-export-modules.js";
import defaultImport from "./28-export-modules.js";

// funciones

console.log(add(1, 2));

// propiedades

console.log(PI);
console.log(name);

// clases

let circle = new Circle(10)
console.log(circle.radius);
console.log(circle.area().toFixed(2));

// importacion por defecto
console.log(defaultImport(5, 3));

// let myClass = new resta();
// myClass.func();

// proyecto modular
// import {MyImport} from "./directory/file.js"