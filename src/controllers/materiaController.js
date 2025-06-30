const db = require('../../config/db');

exports.getMaterias = (req, res) => {
  db.query('SELECT * FROM materias', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.getMateria = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM materias WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).json({ message: 'Materia no encontrada' });
    res.json(result[0]);
  });
};

exports.createMateria = (req, res) => {
  const { nombre, profesorId } = req.body;
  db.query(
    'INSERT INTO materias (nombre, profesorId) VALUES (?, ?)',
    [nombre, profesorId || null],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Materia creada', id: result.insertId });
    }
  );
};

exports.getAlumnosporMateria = (req, res) => {
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
