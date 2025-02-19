// 1. Crea una clase que reciba dos propiedades

class Computador {
    constructor(marca, modelo) {
        this.marca = marca,
        this.modelo =  modelo
    }
}

// 2. Añade un método a la clase que utilice las propiedades

class ComputadorHP extends Computador{
    fichaTecnica() {
        console.log(`
            Esta es la ficha tecnica:
            - Marca: ${this.marca}
            - Modelo: ${this.modelo}
        `)
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función

let pcHP = new ComputadorHP("HP", "Invictus")
console.log(pcHP)
pcHP.fichaTecnica()

// 4. Añade un método estático a la primera clase

class StaticComputador {
    constructor(marca, modelo) {
        this.marca = marca,
        this.modelo =  modelo
    }

    static maxComponentes(max) {
        console.log(`Maximos Componentes ${max}`)
    }
}

// 5. Haz uso del método estático

StaticComputador.maxComponentes(5)
// 6. Crea una clase que haga uso de herencia
// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class PcEscritorio extends Computador {

    #licenciaWin
    #modeloPlaca

    constructor(marca, modelo, licenciaWin, modeloPlaca){
        super(marca, modelo)
        this.#licenciaWin = licenciaWin
        this.#modeloPlaca = modeloPlaca
    }

    set licenciaWin(licenciaWin){
        this.#licenciaWin = licenciaWin
    }

    get licenciaWin(){
        return this.#licenciaWin
    }

    get modeloPlaca() {
        return this.#modeloPlaca
    }

}

let pc = new PcEscritorio("Hp", "Omen","licencia WIN pro", "Asus Tuf")
console.log(pc)

// 9. Utiliza los get y set y muestra sus valores
console.log(pc.licenciaWin)
console.log(pc.modeloPlaca)
pc.licenciaWin = "Windows Home"
console.log(pc.licenciaWin)

// 10. Sobrescribe un método de una clase que utilice herencia 

class Arma {
    dispara(){
        console.log("Se disparo el arma")
    }
}

class Francotirador extends Arma {
    dispara(){
        console.log("Se disparo el arma con bala 9mm")
    }
}

let arma1 = new Arma()
arma1.dispara()
let arma2 = new Francotirador()
arma2.dispara()