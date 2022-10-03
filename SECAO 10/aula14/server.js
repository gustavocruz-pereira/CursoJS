const express = require('express');
//const { default: mongoose } = require('mongoose');
const app = express();

const mongoose = require('mongoose')
mongoose.connect()

app.use(express.urlencoded({ extended: true }));



app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});