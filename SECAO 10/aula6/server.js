// Express
const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <p style="color: lime;">Hello World!</p>
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar </button>
    `)
})

app.post('/', (req, res) => {
    res.send('Enviado.')
})

app.get('/contato', (req, res) => {
    res.send('<h1>CONTATO</h1>')
})

app.listen(3000, () => {
    console.log('Servidor executando');
})