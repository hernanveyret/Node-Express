const express = require('express');
let { programacion } = require('./datos/cursos.js').infoCursos;
const routerProgramacion = express.Router();

//Middleware
routerProgramacion.use(express.json()); // procesa el cuerpo de la solicitud en formato json.

routerProgramacion.get('/', (req,res) => {
  res.send(programacion);
});

//se usa la variable creada en vez de app y solo se deja una / con lo que continue
routerProgramacion.get('/:lenguaje',(req, res) => {
  const lenguaje = req.params.lenguaje;
 
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

  if(resultados.length === 0){
    return res.status(404).send(`Erro ${res.statusCode}: No se encontro el curso especificado... `);
  };
  res.send(resultados);
});

//POST
routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(programacion);
});

//PUT
routerProgramacion.put('/:id', (req,res) => {
  const cursoActualizado = req.body; // toma el cuerpo actualizado, el objeto
  const id = parseInt(req.params.id) // toma el numero de id 
  const indice = programacion.findIndex(curso => curso.id === id); //busca el objeto con el id especificado

  if(indice > 0){
    programacion[indice] = cursoActualizado // actualiza el curso por el nuevo
    res.send(programacion)
  }
});

//DELETE
routerProgramacion.delete('/:id', (req, res) => {
  
  const id = parseInt(req.params.id)
  /*
  const indice = programacion.findIndex(curso => curso.id == id );
  if(indice >= 0 ){
   programacion.splice(indice, 1)
  }
   */
  const resultado = programacion.filter(curso => curso.id != id)
  console.log(id)
  programacion = resultado
  console.log(programacion)
  res.send(resultado)
});

// PATCH
routerProgramacion.patch('/:id', (req,res) => {
  const infoActualizada = req.body;
  const id = parseInt(req.params.id);
  const indice = programacion.findIndex(curso => curso.id === id);
  console.log(indice)
  if(indice >=0){
    const cursoModificar = programacion[indice] // toma el objeto a modificar
    Object.assign(cursoModificar, infoActualizada)// actualiza solo las propiedades especificadas
  }
  res.send(programacion);
} )
module.exports = routerProgramacion;