// Revisando Objetos
const pessoa = {
    chave: 'valor',
    nome: 'Gustavo',
    sobrenome: 'Cruz',
};

const pessoa1 = new Object();
pessoa1.nome = 'João';
pessoa1.sobrenome = 'Sobrenome';
pessoa1.idade = 23;
pessoa1.falar = function () {
    console.log(`${this.nome} está falando...`);
}
pessoa1.getDataNasc = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

pessoa1.falar();
console.log(pessoa1.getDataNasc());

// Factory functions 

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
};

const p1 = criaPessoa('Gustavo', 'Cruz');
console.log(p1.nomeCompleto);

// Constructor functions / Classes  

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    // Object.freeze(this)
}

const p2 = new Pessoa('Gus', 'Silva')
console.log(p2)