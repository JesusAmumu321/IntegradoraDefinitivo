const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración de la conexión a MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Verificar la conexión
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conectado exitosamente a MySQL');
  connection.release();
});

//ejemplo, se supone que si furulais
app.get('/HTML/registro.html', (req, res) => {

    res.log('Se ha hecho una solicitud a /HTML/registro.html');
});

// Ejemplo de ruta que usa la conexión a MySQL
app.get('/usuarios', (req, res) => {
  pool.query('SELECT * FROM usuarios', (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error en la consulta' });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});