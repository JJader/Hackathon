const { string } = require('joi')
const mongoose = require('mongoose')

const ProjetoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Novo"    
    },
    bolsa: {
        type: Number,
        min: 0,
        default: 0
    },
    area: {
        type: [String],
        required: true
    },
    responsavel: {
        type: {
            nome: String,
            matricula: String
        },
        required: true
    },
    preRequisitos: {
        type: [String]
    },
    horas: {
        type: Number,
        min: 0,
        default: 0
    },
    descricao:{
        type: String,
        required: true
    },
    colaboradores: {
        type: [{
            nome: String,
            matricula: String
        }]
    }
})

module.exports = mongoose.model("Projeto", ProjetoSchema)