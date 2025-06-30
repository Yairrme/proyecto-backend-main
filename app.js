require('dotenv').config();
const express = require('express');
const app = express();
const envs = require('./src/configurations/envs');
require('./config/db');

app.use(express.json());

// Conexion de rutas
app.use('/alumnos', require('./src/routes/alumnoRoutes'));
app.use('/profesores', require('./src/routes/profesorRoutes'));
app.use('/materias', require('./src/routes/materiaRoutes'));
app.use('/matriculas', require('./src/routes/matriculaRoutes'));
app.use('/tarea', require('./src/routes/tareaRoutes'));

const PORT = envs.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
// Exportamos la aplicación para pruebas
module.exports = app;