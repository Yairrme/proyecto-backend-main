const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

router.get('/', alumnoController.getAlumnos);
router.post('/', alumnoController.createAlumno);
router.get('/:id/tareas', alumnoController.getTareasPorAlumno);

module.exports = router;
