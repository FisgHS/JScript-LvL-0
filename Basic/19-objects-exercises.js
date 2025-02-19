// 1. Crea un objeto con 3 propiedades

let persona = {
    nombre: "Francisco Silva",
    edad: 23,
    apodo: "Fisg"
}

// 2. Accede y muestra su valor
console.log(persona);

// 3. Agrega una nueva propiedad

persona.trabaja = true
console.log(persona)

// 4. Elimina una de las 3 primeras propiedades

delete persona.apodo
console.log(persona)

// 5. Agrega una función e invócala

persona.camina = function(){
    console.log("La persona camina")
}
persona.camina()

// 6. Itera las propiedades del objeto

for(let key in persona) {
    console.log(`${key} : ${persona[key]}`)
}

// 7. Crea un objeto anidado

persona.trabajo = {
    puesto: "Desarrollador",
    experiencia: 2,
    empresa: "Huemul Solutions"
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(persona.trabajo)

// 9. Comprueba si los dos objetos creados son iguales

let persona2 = {
    nombre: "Francisco Silva",
    edad: 23,
    trabaja: true,
    camina: function(){
        console.log("La persona camina")
    },
    trabajo: {
        puesto: "Desarrollador",
        experiencia: 2,
        empresa: "Huemul Solutions"
    }
}

console.log(persona === persona2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(persona.nombre === persona2.nombre)
console.log(persona.edad === persona2.edad)
console.log(persona.trabaja === persona2.trabaja)
