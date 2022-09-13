const db = require("../database/models");
const Op = db.Sequelize.Op;

const moviesController = {
    listar: (req,res)=>{
        db.PeliculaOSerie.findAll()
            .then(peliculas=> res.json(peliculas))
    },
    detalle: (req,res)=>{
        db.PeliculaOSerie.findByPk(req.params.id,{
            include:[
                {association: 'personaje'},
                {association: 'genero'}
            ]
        })
            .then(pelicula=> res.json(pelicula))
    },
    nuevaPelicula: (req,res)=>{
        db.PeliculaOSerie.create({
            titulo: req.body.titulo,
            imagen: req.body.imagen,
            fecha: req.body.fecha,
            genero_id: req.body.genero,
        })
            .then(res.json('pelicula creado :)!'))
    },
    update: (req,res)=>{
        db.PeliculaOSerie.update({
            titulo: req.body.titulo,
            imagen: req.body.imagen,
            fecha: req.body.fecha,
            genero_id: req.body.genero,
        },{
            where: {id: req.params.id}
        })
            .then(res.json('pelicula actualizada :)!'))
    },
    destroy: (req,res)=>{
        db.Personaje_peliculaSerie.destroy({
            where: {pelicula_id: req.params.id}
        }).then(db.PeliculaOSerie.destroy({
            where: {id: req.params.id}
            }).then(res.json('pelicula eliminada :)!')))
    },
    search: (req,res)=>{
        if(req.query.name){
            db.PeliculaOSerie.findAll(
                {
                where: {titulo: {[Op.like]: '%'+ req.query.name +'%'}},
                include: [
                    {association: 'genero'}
                ]
            }).then(peliculas=>{
                res.json(peliculas);
            })
        }
        if(req.query.genre){
            db.PeliculaOSerie.findAll(
                {
                where: {genero_id: {[Op.like]: '%'+ req.query.genre +'%'}},
                include: [
                    {association: 'genero'},
                ]
            }).then(peliculas=>{
                res.json(peliculas);
            })
        }
        if(req.query.weight){
            db.PeliculaOSerie.findAll(
                {
                where: {peso: {[Op.like]: '%'+ req.query.weight +'%'}},
                include: [
                    {association: 'genero'},
                ]
            }).then(personajes=>{
                res.json(personajes);
            })
        }
    }
}

module.exports = moviesController