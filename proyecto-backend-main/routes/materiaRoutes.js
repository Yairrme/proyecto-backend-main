const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/materiaController');

router.get('/', materiaController.getMaterias);
router.post('/', materiaController.createMateria);
router.get('/:id/alumnos', materiaController.getAlumnosPorMateria);

module.exports = router;
// Este archivo define las rutas para las materias
// y las vincula con los métodos del controlador correspondiente.