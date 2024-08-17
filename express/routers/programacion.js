const express = require('express');
const { programacion } = require('./datos/cursos.js').infoCursos;
const routerProgramacion = express.Router();

routerProgramacion.get('/', (req,res) => {
  res.send(programacion)
});

//se usa la variable creada en vez de app y solo se deja una / con lo que continue
routerProgramacion.get('/:lenguaje',(req, res) => {
  const lenguaje = req.params.lenguaje;
 
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

  if(resultados.length === 0){
    return res.status(404).send(`Erro ${res.statusCode}: No se encontro el curso especificado... `)
  };
  res.send(resultados)
});
module.exports = routerProgramacion;