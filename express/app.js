const express = require('express');
const { infoCursos } = require('./cursos.js');

const app = express();

//Routing , rutas
app.get('/', (req,res) => {
  res.send('Mi primer servidor en Express...');
});

app.get('/api/cursos', (req,res) => {
  res.send(infoCursos);
});

app.get('/api/cursos/programacion',(req,res)=> {
  res.send(infoCursos.programacion);
});
app.get('/api/cursos/matematicas',(req,res)=> {
  res.send(infoCursos.matematicas);
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
