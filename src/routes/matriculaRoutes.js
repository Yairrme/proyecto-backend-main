const express = require('express');
const router = express.Router();
const matriculaController = require('../controllers/matriculaController');

router.post('/', matriculaController.matricularAlumno);

module.exports = router;
