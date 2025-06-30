const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

router.post('/', tareaController.crearTarea);

module.exports = router;
