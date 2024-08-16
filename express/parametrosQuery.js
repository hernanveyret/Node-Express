const express = require('express');
const app = express();
const { infoCursos } = require('./cursos.js');

app.get('/api/cursos/programacion/:lenguaje', ( req, res ) => {
  let lenguaje = req.params.lenguaje;
  let resultado = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje );
  
  if(resultado.length === 0){
  return res.status(404).send(`Error ${res.statusCode}: No se encontro el curso especificado`)
  }

  console.log(req.query.ordenar)
  if(req.query.ordenar === 'vistas'){
    //return res.send(JSON.stringify(resultado.sort((a,b) => a.vistas - b.vistas)));
    return res.send(resultado.sort((a,b) => a.vistas - b.vistas)); // retorna de menor a mayor la cantiodad de vistas
    
  }
  res.send(resultado);
});

app.get('/api/cursos/programacion/', (req,res) => {
  const id = parseInt(req.query.id); // retorna el valor de id de la URL;
  console.log(id)
  const resultados = infoCursos.programacion.filter(cursos => cursos.id === id);
  
  if(resultados.length === 0){
    return res.status(404).send(`Error ${res.statusCode}: No se encontro el id especificado, vualva a intentarlo...`)
  };
  res.send(resultados)
})

let PUERTO = process.env.PORT || 3000

app.listen(PUERTO, () => {
  console.log(`Escuchando el puerto ${PUERTO}...`)
})