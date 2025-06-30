const mysql = require('mysql2');
const envs = require('../proyecto-backend-main/configurations/envs');


// Configuración de la conexión a la base de datos usando variables del .env
const connection = mysql.createConnection({
  host: envs.DB_HOST,
  user: envs.DB_USER,
  password: envs.DB_PASSWORD,
  database: envs.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err.message);
    process.exit(1); // Finaliza el proceso si hay error
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

module.exports = connection;
// Este archivo establece la conexión a la base de datos MySQL utilizando las variables de entorno definidas en el archivo .env.