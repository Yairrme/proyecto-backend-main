const db = require('../../config/db');

exports.getAlumnos = (req, res) => {
  db.query('SELECT * FROM alumnos', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.createAlumno = (req, res) => {
  const { nombre, email } = req.body;
  db.query('INSERT INTO alumnos (nombre, email) VALUES (?, ?)', [nombre, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Alumno creado', id: result.insertId });
  });
};

exports.getTareasPorAlumno = (req, res) => {
  const alumnoId = req.params.id;
  const sql = `
    SELECT * FROM tareas WHERE alumnoId = ?
  `;
  db.query(sql, [alumnoId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};
