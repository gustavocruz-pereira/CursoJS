// Metodos estaticos

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // Metodo de instancia
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }


    // Metodo estatico - só é possivel acessar de dentro da classe
    static trocarPilha() {
        console.log('Pilha trocada')
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume


ControleRemoto.trocarPilha();