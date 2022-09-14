// For in
const frutas = ['Maçã', 'Uva', 'Laranja'];

for (let i in frutas) {
    console.log(i)
}

const pessoa = {
    nome: 'Gus',
    sobrenome: 'Cruz',
    idade: 23
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}