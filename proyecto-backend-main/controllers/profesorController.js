const db = require('../../config/db');

exports.getProfesores = (req, res) => {
  db.query('SELECT * FROM profesores', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.createProfesor = (req, res) => {
  const { nombre, email } = req.body;
  db.query('INSERT INTO profesores (nombre, email) VALUES (?, ?)', [nombre, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Profesor creado', id: result.insertId });
  });
};
