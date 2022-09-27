// Factory functions + Prototypes
const falar = {
    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando`);
    },
}

const pessoaPrototype = Object.assign({}, falar);
function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Nome', 'da Silva')
p1.falar()