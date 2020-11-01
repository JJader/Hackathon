//Router
const { request } = require('express')
const express = require('express')
const router = express.Router() 

//Validar
const Joi = require('joi')


function validateProjeto(projeto)
{
    const schema = Joi.object({
        nome: Joi.string().required(),
        tipo: Joi.string().required(),
        status: Joi.string().valid('Novo', 'Em andamento', 'Concluído'),
        bolsa: Joi.number().min(0),
        area: Joi.array(),
        responsavel: Joi.object({
            nome: Joi.string(),
            matricula: Joi.string()
        }),
        preRequisitos: Joi.array(),
        horas: Joi.number().min(0),
        descricao: Joi.string().required(),
        colaboradores: Joi.array()
    })

    return schema.validate(projeto)
}

//Modelo
const Projeto = require('../models/Projeto')

//GET ALL (read)
router.get('/', async (req, res) => {
    try
    {
        const projeto = await Projeto.find()
        res.json(projeto)
    }catch(err)
    {  
        res.json({ message: err.message })
    }
})

//GET ONE (read)
router.get('/:id', async (req, res) => {
    try
    {
        const projeto = await Projeto.findById(req.params.id)
        res.json(projeto)
    }catch(err)
    {
        res.json({ message: err.message})
    }
})

//POST (create)
router.post('/', async (req, res) => {
    const projeto = new Projeto({
        nome: req.body.nome,
        tipo: req.body.tipo,
        status: req.body.status,
        bolsa: req.body.bolsa,
        area: req.body.area,
        responsavel: req.body.responsavel,
        preRequisitos: req.body.preRequisitos,
        horas: req.body.horas,
        descricao: req.body.descricao,
        colaboradores: req.body.colaboradores
    })

    try
    {
        const savedProjeto = await projeto.save()
        res.json(savedProjeto)
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

//PATCH (update)
router.patch('/:id', async (req, res) => {
    try
    {
        const auxProj = await Projeto.findById(req.params.id)
        const novoProj = {
            nome: req.body.nome || auxProj.nome,
            tipo: req.body.tipo || auxProj.tipo,
            status: req.body.status || auxProj.status,
            bolsa: req.body.bolsa || auxProj.bolsa,
            area: req.body.area || auxProj.area,
            responsavel: req.body.responsavel || auxProj.responsavel,
            preRequisitos: req.body.preRequisitos || auxProj.preRequisitos,
            horas: req.body.horas || auxProj.horas,
            descricao: req.body.descricao || auxProj.descricao,
            colaboradores: req.body.colaboradores || auxProj.colaboradores 
        }

        const { error } = validateProjeto(novoProj)
        if(error)
        {
            res.status(400).send(error.message)
            return
        }

        const updatedProjeto = await Projeto.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: novoProj
        }, {
            upsert: true,
            new: true
        })
        res.json(updatedProjeto)
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

//DELETE ALL (delete)
router.delete('/', async (req, res) => {
    try
    {
        const deletedObjects = await Projeto.deleteMany({
            horas: {
                $gte: 0
            }
        })
        res.send('All projects were removed!')
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

//DELETE ONE (delete)
router.delete('/:id', async (req, res) => {
    const projeto = await Projeto.findById(req.params.id)
    if(!projeto)
    {
        res.status(404).send("Projeto nao encontrado!")
        return
    }

    try
    {
        const deletedProject = await Projeto.deleteOne({
            _id: req.params.id
        })
        res.json(projeto)
    }catch(err)
    {
        res.json({ message: err.message })
    }
})

module.exports = router