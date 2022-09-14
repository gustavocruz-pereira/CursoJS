// Atribuição via destruturação (Objetos)    

const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Cruz',
    idade: 23,
    endereco: {
        rua: 'Rua dos bobos',
        numero: 2000
    }
};

// Atribuição normal
//const nome = pessoa.nome
//console.log(nome)

// Atribuição via desestruturação
const { nome } = pessoa;
console.log(nome);