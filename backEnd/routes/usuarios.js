//Router
const { request } = require('express')
const express = require('express')
const router = express.Router()

//Validar
const Joi = require('joi')

function validateUsuario(usuario)
{
    const schema = Joi.object({
        nome: Joi.string().required(),
        matricula: Joi.string().required(),
        curso: Joi.string().required(),
        foto: Joi.string(),
        areaInteresse: Joi.array(),
        Projeto: Joi.array(),
        horas: Joi.number().min(0)
    })

    return schema.validate(usuario)
}

//Modelo
const Usuario = require('../models/Usuario')

//GET ALL (read)
router.get('/', async (req, res) => {
    try
    {
        const usuario = await Usuario.find()
        res.json(usuario)
    }catch(err)
    {  
        res.json({ message: err.message })
    }
})

//GET ONE (read)
router.get('/:id', async (req, res) => {
    try
    {
        const usuario = await Usuario.findById(req.params.id)
        res.json(usuario)
    }catch(err)
    {
        res.json({ message: err.message})
    }
})

//POST (create)
router.post('/', async (req, res) => {
    const usuario = new Usuario({
        nome: req.body.nome,
        matricula: req.body.matricula,
        curso: req.body.curso,
        foto: req.body.foto,
        areaInteresse: req.body.areaInteresse,
        Projeto: req.body.Projeto,
        horas: req.body.horas
    })

    try
    {
        const savedUsuario = await usuario.save()
        res.json(savedUsuario)
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

//PATCH (update)
router.patch('/:id', async (req, res) => {
    try
    {
        const auxUsuario = await Usuario.findById(req.params.id)

        const newUsuario = {
            nome: req.body.nome || auxUsuario.nome,
            matricula: req.body.matricula || auxUsuario.matricula,
            curso: req.body.curso || auxUsuario.curso,
            foto: req.body.foto || auxUsuario.foto,
            areaInteresse: req.body.areaInteresse || auxUsuario.areaInteresse,
            Projeto: req.body.Projeto || auxUsuario.Projeto,
            horas: req.body.horas || auxUsuario.horas
        }

        const { error } = validateUsuario(newUsuario)
        if(error)
        {
            res.status(400).send(error.message)
            return
        }

        const updatedUsuario = await Usuario.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: newUsuario
        }, {
            upsert: true,
            new: true
        })

        res.json(updatedUsuario)
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

//DELETE ALL (delete)
router.delete('/', async (req, res) => {
    try
    {
        const deleteUsuarios = await Usuario.deleteMany({
            horas: {
                $gte: 0
            }
        })
        res.send('All users were removed!')
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

//DELETE ONE (delete)
router.delete('/:id', async (req, res) => {
    const usuario = await Usuario.findById(req.params.id)
    if(!usuario)
    {
        res.status(404).send("Usuario nao encontrado!")
        return
    }

    try
    {
        const deletedUser = await Usuario.deleteOne({
            _id: req.params.id
        })

        res.json(usuario)
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

module.exports = router