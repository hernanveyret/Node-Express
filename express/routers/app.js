const express = require('express');
const app = express();
const routerMatematicas = require('./matematicas.js');
const routerProgramacion = require('./programacion.js');

app.use('/api/cursos/programacion', routerProgramacion);
app.use('/api/cursos/matematicas', routerMatematicas);

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`Escuchando el puerto ${PUERTO}`)
});