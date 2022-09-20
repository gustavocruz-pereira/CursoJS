// Reduce - reduzir um array para um unico elemento

const numeros = [5, 50, 10, 40, 93, 7, 21]
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador
}, 0);

const total2 = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, []);



// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Gustavo', idade: 22 },
    { nome: 'Maria', idade: 23 },
    { nome: 'João', idade: 73 },
    { nome: 'Cleber', idade: 20 },
    { nome: 'Leticia', idade: 20 },
    { nome: 'Gus', idade: 51 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor
})

console.log(maisVelha)