// g - encontra todas as ocorrencias
// i - insensitive
//() - grupos
// | - ou

const { texto } = require('./base')


const regExp1 = /João/gi

console.log(texto.replace(/[a-z.] /g, 'olá'))