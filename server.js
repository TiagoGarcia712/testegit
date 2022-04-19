const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Olá mundo estou funcionando!' });
})
app.get('/Olá', (req, res) => {
    res.status(200).send({ message: 'Oi sou a rota Olá' });
})

app.listen(3001, ()=>{
    console.log('Api rodando na porta 3001');
})
