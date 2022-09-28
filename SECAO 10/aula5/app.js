const path = require('path');
const caminhoArquio = path.resolve(__dirname, '..', 'teste.json');
const escreve = require('./modulos/escrever')
const ler = require('./modulos/ler')


const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Pedro' },
    { nome: 'Joana' },
];

const json = JSON.stringify(pessoas, '', 2)
escreve(caminhoArquio, json)