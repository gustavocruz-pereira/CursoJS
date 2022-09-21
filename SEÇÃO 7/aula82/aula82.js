/// Herança com classes

class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log('Dispositivo ja ligado')
            return;
        }
        this.ligado = false
    }

    desligar() {
        if (!this.ligado) {
            console.log('Dispositivo ja desligado')
            return;
        }

        this.ligado = false
    }
}


class Smartphone extends Dispositivo { }

const s1 = new Smartphone('Samsung')
console.log(s1)

