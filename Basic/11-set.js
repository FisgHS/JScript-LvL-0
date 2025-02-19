// set
// En el set no existen posiciones

// Declaración de un set

let mySet = new Set();

// Iniciazación de un set

mySet = new Set(["Francisco", "Silva", "Fisg", 23, true, "francisco@fisg.dev"]);

console.log(mySet);

// Metodos comunes

// add y delete

// Agregar un elemento al set al final
mySet.add("https://fisg.dev");

console.log(mySet);

// No elimina el ultimo elemento, le debemos indicar que elemento eliminar
// Se le debe pasar el valor del elemento a eliminar
mySet.delete("https://fisg.dev")

console.log(mySet);

console.log(mySet.delete("Fisg"));
console.log(mySet.delete(3));

console.log(mySet);

// has
// validad si un elemento existe en el set
console.log(mySet.has("Fisg"));
console.log(mySet.has("Silva"));

// size
console.log(mySet.size);

// Convertir un set a un array
let myArray = Array.from(mySet)

console.log(myArray)

// Convertir un array a un set
let mySet2 = new Set(myArray)
console.log(mySet2)

// No adminte elementos duplicados
// Pero deben ser exactamente iguales

mySet.add("Francisco");
mySet.add("FranciSco");
mySet.add("Francisco");
console.log(mySet);