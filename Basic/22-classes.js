// Clases
// Sirve para crear plantillas de objetos
// El constructor es un metodo que nos permite definir cual es la estructura inicial de un objeto

class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis

let person = new Person("Silva", 23, "Fisg")
let person2 = new Person("Francisco", 32, "Silva")

console.log(person)
console.log(person2)

// Valores por defecto

class DefaultPerson {
    
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson()
let person4 = new DefaultPerson("Francisco")
let person5 = new DefaultPerson("Francisco", 32)
let person6 = new DefaultPerson("Francisco", 32, "Fisg")

console.log(person3)
console.log(person4)
console.log(person5)
console.log(person6)

// Acceder a los valores
console.log(person3.name)
console.log(person3["age"])

// Modificar valores
person3.name = "Francisco"
console.log(person3)

// Funciones en clases
class PersonWithMethod {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("Estoy caminando")
    }
}

let person7 = new PersonWithMethod("Francisco", 32, "Fisg")
person7.walk()

// Propiedades privadas

class PrivatePerson {

    #bank // Propiedad privada

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }

}

let person8 = new PrivatePerson("Francisco", 32, "Fisg", "Banco de Chile")
// console.log(person8.bank) // No se puede acceder a la propiedad privada
// person8.bank = "Banco de Pero" // bank no es #bank

console.log(person8)

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name(){
        return this.#name
    }

    set bank(bank){
        this.#bank = bank
    }

}

let person9 = new GetSetPerson("Francisco", 23, "Fisg", "Banco de Chile")
console.log(person9) 
console.log(person9.name) // Se accede a traves del getter
person9.bank = "new Banco de Pero" // Se accede a traves del setter

// Herencia
class Animal {
    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Hago un sonido")
    }
}

class Dog extends Animal {

    sound() {
        console.log("Guau guau")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("Firulais")
myDog.run()
myDog.sound()

let myFish = new Fish("Nemo", 10)
myFish.swim()
myFish.sound()

// Metodos estaticos

class MathOperations {

    static sum(a, b) {
        return a + b
    }

}

console.log(MathOperations.sum(2, 3))
// let myClass = new MathOperations()
// console.log(myClass.sum(2, 3)) // No se puede acceder a traves de la instancia