//Modulos a serem utilizados na API
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

//Importar rotas
const usuariosRoute = require('./routes/usuarios')
const projetosRoute = require('./routes/projetos')

//Middleware
app.use(bodyParser.json())
app.use('/api/usuarios', usuariosRoute)
app.use('/api/projetos', projetosRoute)

//Conexao com o banco de dados
mongoose.connect(process.env.PASSWORD, { useNewUrlParser: true , useUnifiedTopology: true }, () => {
    console.log("Conectado ao banco de dados...")
})

//Porta
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Servidor aberto na porta ${port}...`)
})

//GET pagina inicial
app.get('/', (req, res) => {
    res.send('Pagina inicial!')
})