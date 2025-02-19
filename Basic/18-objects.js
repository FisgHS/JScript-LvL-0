// Objects
// Todo lo que no es un dato primitivo es un objeto
// Pueden contener propiedades funciones y otros objetos
// La instancia es unica, es decir, no se pueden crear dos objetos iguales

// Sintaxis

let person = {
    name: "Francisco",
    age: 23,
    alias: "Fisg",
};

// Acceder a las propiedades de un objeto

// Notacion punto
// es recomendada, es mas facil de leer
console.log(person.name);

// Notacion de corchetes
console.log(person["name"]);

// Modificacion de propiedades

person.name = "Francisco Silva";
console.log(person.name);

console.log(typeof person.age);
person.age = "23";
console.log(typeof person.age);

// Eliminar propiedades

console.log(person);
delete person.age;
console.log(person);

// Nueva propiedad

person.email = "francisco@fisg.dev"
person["phone"] = "123456789";
console.log(person);

// Metodos (funciones)

let person2 = {
    name: "Francisco",
    age: 23,
    alias: "Fisg",
    walk: function() {
        console.log("Walking...");
    }
};

person2.walk();

// Anidacion de objetos
// this hace referencia al objeto actual

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

console.log(person3);

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work();

// Igualdad de objetos

let person4 = {
    name: "Francisco Silva",
    alias: "Fisg",
    email: "francisco@fisg.dev",
    phone: "123456789"
};

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iterar sobre un objet
// cuando iteramos accedemos a las claves

for (let key in person4) {
    console.log(key + ": " + person4[key]); 
}

// Funciones como objetos
// Estamos creando un objete como contructor, que me permitiria crear objetos en multiples instancias
// Aunque se puede utilizar esta forma de crear objetos, no es recomendada. Deberia ser una clase

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person5 = new Person("Francisco", 23);
console.log(person5);

console.log(typeof person5);
console.log(typeof person4);
