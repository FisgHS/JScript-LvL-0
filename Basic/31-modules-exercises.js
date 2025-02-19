
// 1. Exporta una función

export function myFunction() {
    console.log("Hello from myFunction!");
}

// 2. Exporta una constante

export const myConstant = 42;

// 3. Exporta una clase

export class MyClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

// 4. Importa una función

import { myFunction } from './path/to/module';

// 5. Importa una constante

import { myConstant } from './path/to/module';

// 6. Importa una clase

import { MyClass } from './path/to/module';
import defaultModule from './path/to/defaultModule';
import { utilFunction, utilConstant, UtilClass } from './utils';

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

const defaultFunction = () => {
    console.log("Hello from defaultFunction!");
};

const defaultConstant = 100;

class DefaultClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello from DefaultClass, ${this.name}!`);
    }
}

export default {
    defaultFunction,
    defaultConstant,
    DefaultClass
};

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// const { defaultFunction, defaultConstant, DefaultClass } = defaultModule;

// defaultFunction();
// console.log(defaultConstant);
// const instance = new DefaultClass('John');
// instance.greet();

// 9. Exporta una función, una constante y una clase desde una carpeta

// In /d:/Ingenieria Informatica/Aprendiendo/JavaScript/Lvl 0/JScript-LvL-0/Basic/utils.js

export function utilFunction() {
    console.log("Hello from utilFunction!");
}

export const utilConstant = 200;

export class UtilClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello from UtilClass, ${this.name}!`);
    }
}

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

// Usage examples
utilFunction();
console.log(utilConstant);
const utilInstance = new UtilClass('Jane');
utilInstance.greet();