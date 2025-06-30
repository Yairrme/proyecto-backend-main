const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesorController');

router.get('/', profesorController.getProfesores);
router.post('/', profesorController.createProfesor);

module.exports = router;
// Este archivo define las rutas para los profesores
// y las vincula con los métodos del controlador correspondiente.
