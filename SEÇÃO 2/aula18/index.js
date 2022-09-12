/*function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
};

const pessoa1 = criaPessoa('Gus', 'Cruz', 23)

console.log(pessoa1.nome)*/

const pessoa1 = {
    nome: 'Gus',
    sobrenome: 'Cruz',
    idade: 23,

    fala() {
        console.log(`Minha idade atual é ${this.idade}`)
    }
}

pessoa1.fala()