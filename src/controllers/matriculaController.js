const db = require('../../config/db');

exports.matricularAlumno = (req, res) => {
  const { alumnoId, materiaId } = req.body;
  db.query('INSERT INTO matriculas (alumnoId, materiaId) VALUES (?, ?)', [alumnoId, materiaId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Alumno matriculado', id: result.insertId });
  });
};
