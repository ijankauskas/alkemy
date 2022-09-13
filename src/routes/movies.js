const express = require('express');
const router = express.Router();

const moviesController = require('../controller/moviesController');
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', moviesController.listar);
//CRUD
router.get('/detail/:id', moviesController.detalle);
router.post('/create', moviesController.nuevaPelicula);
router.put('/:id', moviesController.update); 
router.delete('/:id', moviesController.destroy); 
//BUSCADOR
router.get('/search', moviesController.search);


module.exports = router;