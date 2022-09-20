// MAP


const numeros = [5, 50, 10, 40, 93, 7, 21]

const numerosDobrados = numeros.map(valor => valor * 2);



// Retorne uma string com o nome da pessoa
// Remova a chave nome 
// Adicione um id em cada objeto
const pessoas = [
    { nome: 'Gustavo', idade: 22 },
    { nome: 'Maria', idade: 23 },
    { nome: 'João', idade: 73 },
    { nome: 'Cleber', idade: 20 },
    { nome: 'Leticia', idade: 20 },
    { nome: 'Gus', idade: 51 },
];

const nomes = pessoas.map(valor => valor.nome);
const comIds = pessoas.map((obj, indice) => {
    obj.id = (indice + 1)
    return obj
});
console.log(comIds)

const idades = pessoas.map(obj => {
    delete obj.nome
    return obj
});


console.log(pessoas)