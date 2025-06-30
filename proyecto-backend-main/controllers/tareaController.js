const db = require('../../config/db');

exports.crearTarea = (req, res) => {
  const { titulo, descripcion, fechaEntrega, alumnoId, materiaId } = req.body;
  const sql = `
    INSERT INTO tareas (titulo, descripcion, fechaEntrega, alumnoId, materiaId)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(sql, [titulo, descripcion, fechaEntrega, alumnoId, materiaId], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Tarea cargada', id: result.insertId });
  });
};
