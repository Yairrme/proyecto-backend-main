require('dotenv').config();
const express = require('express');
const app = express();
const envs = require('./proyecto-backend-main/configurations/envs');
require('./config/db');

app.use(express.json());

// Conectamos las rutas
app.use('/alumnos', require('./proyecto-backend-main/routes/alumnoRoutes'));
app.use('/profesores', require('./proyecto-backend-main/routes/profesorRoutes'));
app.use('/materias', require('./proyecto-backend-main/routes/materiaRoutes'));
app.use('/matriculas', require('./proyecto-backend-main/routes/matriculaRoutes'));
app.use('/tarea', require('./proyecto-backend-main/routes/tareaRoutes'));

const PORT = envs.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
// Exportamos la aplicación para pruebas
module.exports = app;