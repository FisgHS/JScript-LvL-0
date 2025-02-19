// 1. Escribe un comentario en una línea

    // Comentario de una sola linea

// 2. Escribe un comentario en varias líneas

    /*
        Comentario de Varias 
        Lineas y con
        Saltos de lineas
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    let nombre = "Francisco Silva"
    let edad = 23
    let esDesarrollador = true
    let Indefinido
    let valorNull = null
    let simbolo = Symbol("simbolo")
    let numeroGigante = 1231736187236781273812872678368713287213n

// 4. Imprime por consola el valor de todas las variables

    console.log("El nombre es: ", nombre)
    console.log("La edad es: ", edad)
    console.log("Es desarrollador: ", esDesarrollador)
    console.log("Indefinido: ", Indefinido)
    console.log("Valor Null: ", valorNull)
    console.log("Simbolo: ", simbolo)
    console.log("Numero Gigante: ", numeroGigante)

// 5. Imprime por consola el tipo de todas las variables

    console.log("El tipo de dato de nombre es: ", typeof nombre)
    console.log("El tipo de dato de edad es: ", typeof edad)
    console.log("El tipo de dato de esDesarrollador es: ", typeof esDesarrollador)
    console.log("El tipo de dato de Indefinido es: ", typeof Indefinido)
    console.log("El tipo de dato de valorNull es: ", typeof valorNull)
    console.log("El tipo de dato de simbolo es: ", typeof simbolo)
    console.log("El tipo de dato de numeroGigante es: ", typeof numeroGigante)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

    nombre = "Paco Silva"
    edad = 24
    esDesarrollador = false
    Indefinido = undefined
    valorNull = null
    simbolo = Symbol("noSimbolo")
    numeroGigante = 1231736187236781273812872678368711122112112n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

    nombre = 123
    edad = "24"
    esDesarrollador = "true"
    Indefinido = "Indefinido"
    valorNull = 0
    simbolo = 123
    numeroGigante = 1231736187236781273812872678368711122112112

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
    const nombreConstante = "Francisco Silva"
    const edadConstante = 23
    const esDesarrolladorConstante = true
    const IndefinidoConstante = undefined
    const valorNullConstante = null
    const simboloConstante = Symbol("simbolo")
    const numeroGiganteConstante = 1231736187236781273812872678368713287213n
// 9. A continuación, modifica los valores de las constantes
    // nombreConstante = "Paco Silva"
    // edadConstante = 24
    // esDesarrolladorConstante = false
    // IndefinidoConstante = undefined
    // valorNullConstante = null
    // simboloConstante = Symbol("noSimbolo")
    // numeroGiganteConstante = 1231736187236781273812872678368711122112112n
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
    // Las constantes no pueden ser modificadas