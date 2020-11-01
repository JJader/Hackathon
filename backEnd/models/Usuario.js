const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    matricula: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        default: "fotoPadrao.jpg"
    },
    areaInteresse: {
        type: [String]
    },
    Projeto: {
        type: [{ id: String, nome: String }]
    },
    horas: {
        type: Number,
        min: 0,
        default: 0
    } 
})

module.exports = mongoose.model("Usuario", UsuarioSchema)