//  Strings


// Concatenation
let myName = 'Silva';
let greeting = 'Hola, ' + myName + '!';

console.log(greeting);
console.log(typeof greeting);

// Longitud de una cadena
console.log(greeting.length);

// Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[1]);

// Métodos de cadena
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

// Búsqueda de subcadenas
console.log(greeting.indexOf('Silva'));
console.log(greeting.indexOf('Hola'));
console.log(greeting.indexOf('Paco'));

// Comparación de cadenas
console.log(greeting.includes('Silva'));
console.log(greeting.includes('Hola'));
console.log(greeting.includes('Paco'));

// Cortar cadenas
console.log(greeting.slice(0, 10));

// Reemplazar cadenas
console.log(greeting.replace("Silva", "Paco"));

// Template literals (plantillas literales)

let message = `Hola, este
es un mensaje
con varias líneas`;

console.log(message);

let email = "silva@fisg.dev"

console.log(`Hola, ${myName}!. Tu email es ${email}`);
