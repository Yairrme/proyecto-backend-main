const db = require('../../config/db');

exports.getMaterias = (req, res) => {
  db.query('SELECT * FROM materias', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.createMateria = (req, res) => {
  const { nombre, profesorId } = req.body;
  db.query('INSERT INTO materias (nombre, profesorId) VALUES (?, ?)', [nombre, profesorId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Materia creada', id: result.insertId });
  });
};

exports.getAlumnosPorMateria = (req, res) => {
  const materiaId = req.params.id;
  const sql = `
    SELECT a.id, a.nombre, a.email
    FROM alumnos a
    INNER JOIN matriculas m ON a.id = m.alumnoId
    WHERE m.materiaId = ?
  `;
  db.query(sql, [materiaId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};
// Este archivo define los métodos del controlador para las materias
// y maneja las operaciones relacionadas con ellas, como obtener todas las materias,