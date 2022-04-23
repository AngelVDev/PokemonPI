const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const { Pokemon, Type } = require ('../db');
const poke = require ('../controllers/pokeController.js');
const type = require ('../controllers/typeController.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', poke);
router.use('/', type);

module.exports = router;
