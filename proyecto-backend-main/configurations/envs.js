const dotenv = require('dotenv');
const Joi = require('joi');

// Cargar variables del archivo .env
dotenv.config();

const envSchema = Joi.object({
  PORT: Joi.number().required(),
  DB_HOST: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().allow('').required(),
  DB_NAME: Joi.string().required(),
}).unknown(); // Permite otras variables no validadas

const { error, value: envs } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Error al validar las variables de entorno: ${error.message}`);
}

module.exports = {
  PORT: envs.PORT,
  DB_HOST: envs.DB_HOST,
  DB_USER: envs.DB_USER,
  DB_PASSWORD: envs.DB_PASSWORD,
  DB_NAME: envs.DB_NAME,
};
// Este archivo configura las variables de entorno necesarias para la aplicación.
// Utiliza Joi para validar que las variables requeridas estén presentes y tengan el formato correcto.