// Map

// Cada elemento esta formado por una clave y un valor (key, value)
// Se puede almacenar cualquier tipo de dato en la clave y en el valor

// Declaracion de un Map

let myMap = new Map();

console.log(myMap);

// Inicializacion de un Map

myMap = new Map([
    ['name', 'Francisco'],    
    ['age', 23],
    ['country', 'CL']    
])

console.log(myMap);

// Metodos y propiedades de un Map

// set
// Agregar un elemento al Map

myMap.set("alias", "Paco")
myMap.set("name", "Francisco Silva")
console.log(myMap)

// get
// Obtener un elemento del Map

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has
// Verificar si un elemento existe en el Map o una clave

console.log(myMap.has("age"))
console.log(myMap.has("surname"))

// delete
// Eliminar un elemento del Map

myMap.delete("alias")
console.log(myMap)

// keys values entries 
// Obtener las claves del Map
console.log(myMap.keys()) // Retorna las keys en un objeto iterable
console.log(myMap.values()) // Retorna los valores en un objeto iterable
console.log(myMap.entries()) // Retorna las keys y los valores en un objeto iterable

// size
// Obtener la cantidad de elementos del Map
console.log(myMap.size)

// clear
// Eliminar todos los elementos del Map

myMap.clear()

console.log(myMap)

