// 1. Captura una excepción utilizando try-catch

try {
    console.log(myVariable)
} catch (error) {
    console.log("Ha ocurrido un error:", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log(myVariable)
} catch (error) {
    console.log("Ha ocurrido un error:", error.message)
} finally {
    console.log("Finalizacion, Adios!")
}

// 3. Lanza una excepción genérica
// throw new Error("Error Generico")

// 4. Crea una excepción personalizada
class CustomError extends Error {
    constructor (mensaje, seccion) {
        super(mensaje)
        this.seccion = seccion
    }

    printSeccion () {
        console.log("Error ocurrido en:", this.seccion)
    }
}

// 5. Lanza una excepción personalizada

// throw new CustomError("Mensaje de error", "Seccion Lanzamiento")

// 6. Lanza varias excepciones según una lógica definida

function checkValue(value) {
    if (typeof value !== 'number') {
        throw new TypeError("El valor debe ser un número");
    }
    if (value < 0) {
        throw new RangeError("El valor no puede ser negativo");
    }
    if (value === 0) {
        throw new Error("El valor no puede ser cero");
    }
}

try {
    checkValue("a");
} catch (error) {
    console.log("Ha ocurrido un error:", error.message);
}

try {
    checkValue(-1);
} catch (error) {
    console.log("Ha ocurrido un error:", error.message);
}

try {
    checkValue(0);
} catch (error) {
    console.log("Ha ocurrido un error:", error.message);
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    checkValue("a");
    checkValue(-1);
    checkValue(0);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("TypeError capturado:", error.message);
    } else if (error instanceof RangeError) {
        console.log("RangeError capturado:", error.message);
    } else {
        console.log("Error capturado:", error.message);
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const values = ["10.5", "abc", "20.3", null, "30.1", undefined, "40.2"];

for (let i = 0; i < values.length; i++) {
    try {
        let floatValue = parseFloat(values[i]);
        if (isNaN(floatValue)) {
            throw new Error("No se puede convertir a float");
        }
        console.log(`Valor convertido: ${floatValue}`);
    } catch (error) {
        console.log(`Error al convertir el valor en la posición ${i}:`, error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function checkProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new CustomError(`La propiedad '${prop}' no existe en el objeto`, "checkProperty");
    }
    console.log(`La propiedad '${prop}' existe en el objeto`);
}

try {
    checkProperty({ name: "John" }, "age");
} catch (error) {
    if (error instanceof CustomError) {
        console.log("CustomError capturado:", error.message);
        error.printSeccion();
    } else {
        console.log("Error capturado:", error.message);
    }
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function retryOperation(operation, maxRetries) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            operation();
            console.log("Operación exitosa");
            return;
        } catch (error) {
            attempts++;
            console.log(`Intento ${attempts} fallido:`, error.message);
            if (attempts >= maxRetries) {
                console.log("Número máximo de reintentos alcanzado");
                throw error;
            }
        }
    }
}

function operation() {
    // Simula una operación que puede fallar
    if (Math.random() > 0.7) {
        throw new Error("Operación fallida");
    }
    console.log("Operación completada");
}

try {
    retryOperation(operation, 10);
} catch (error) {
    console.log("Operación fallida después de múltiples reintentos:", error.message);
}