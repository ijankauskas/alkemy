const { Association } = require('sequelize');
const db = require('../database/models');
const Op = db.Sequelize.Op;


const charactersController = {
    listar: (req,res)=>{
        db.Personaje.findAll()
            .then( personajes =>{
                res.json(personajes);
            })
    },
    detalle: (req, res)=>{
        db.Personaje.findByPk(req.params.id,{
            include:[
                {association: 'peliculaOSerie'}
            ]
        })
            .then(asd=>{
                res.json(asd)
            })
    },
    nuevoPersonaje: (req,res)=>{
        db.Personaje.create({
            nombre: req.body.nombre,
            imagen: req.body.imagen,
            edad: req.body.edad,
            peso: req.body.peso,
            historia: req.body.historia,
        })
            .then(res.json('personaje creado :)!'))
    },
    update: (req,res)=>{
        db.Personaje.update({
            nombre: req.body.nombre,
            imagen: req.body.imagen,
            edad: req.body.edad,
            peso: req.body.peso,
            historia: req.body.historia,
        },{
            where:{id: req.params.id}
        })
            .then(res.json('personaje modificado :)!'))
    },
    destroy:(req,res)=>{
        db.Personaje_peliculaSerie.destroy({
            where: {personaje_id: req.params.id}
        }).then(db.Personaje.destroy({
            where: {id: req.params.id}
            }).then(res.json('personaje eliminado :)!')))
    },
    search: (req,res)=>{
        if(req.query.name){
            db.Personaje.findAll(
                {
                where: {nombre: {[Op.like]: '%'+ req.query.name +'%'}},
                include: [
                    {association: 'peliculaOSerie'}
                ]
            }).then(personajes=>{
                res.json(personajes);
            })
        }
        if(req.query.age){
            db.Personaje.findAll(
                {
                where: {edad: {[Op.like]: '%'+ req.query.age +'%'}},
                include: [
                    {association: 'peliculaOSerie'},
                ]
            }).then(personajes=>{
                res.json(personajes);
            })
        }
        if(req.query.weight){
            db.Personaje.findAll(
                {
                where: {peso: {[Op.like]: '%'+ req.query.weight +'%'}},
                include: [
                    {association: 'peliculaOSerie'},
                ]
            }).then(personajes=>{
                res.json(personajes);
            })
        }
    }
}

module.exports = charactersController;