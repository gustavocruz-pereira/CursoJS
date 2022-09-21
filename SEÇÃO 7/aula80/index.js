// Criando Classes

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Ja é atrelado ao prototype automaticamente
    falar() {
        console.log(`${this.nome} está falando...`)
    }
}

const p1 = new Pessoa('Gustavo', 'Cruz');
p1.falar()

