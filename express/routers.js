const express = require('express');
const app = express();
const { infoCursos } = require('./cursos.js');

app.get('/api/cursos/programacion/:lenguaje',(req, res) => {
  const lenguaje = req.params.lenguaje;
  const id = req.query.id;

  const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

  if(resultados.length === 0){
    return res.status(404).send(`Erro ${res.statusCode}: No se encontro el curso especificado... `)
  };
  console.log(id)
  res.send(resultados)
});

let PUERTOS = process.env.PORT || 3000;

app.listen(PUERTOS, () => {
  console.log(`Escuchando el puerto ${PUERTOS}`)
})