const express = require('express');
const router = express.Router();

const charactersController = require('../controller/charactersController');
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', charactersController.listar);
//CRUD
router.get('/detail/:id', charactersController.detalle);
router.post('/create', charactersController.nuevoPersonaje);
router.put('/:id', charactersController.update); 
router.delete('/:id', charactersController.destroy); 
//BUSCADOR
router.get('/search', charactersController.search);


module.exports = router;