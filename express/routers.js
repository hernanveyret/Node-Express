const express = require('express');
const app = express();
const { infoCursos } = require('./cursos.js');

//Crea un router
const routerProgramacion = express.Router();
// Le asigna al router la pare de la url a reutilizar
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas', routerMatematicas);

app.get('/', (req,res) => {
  res.send(infoCursos)
});

//se usa la variable creada en vez de app y solo se deja una / con lo que continue
routerProgramacion.get('/:lenguaje',(req, res) => {
  const lenguaje = req.params.lenguaje;
 
  const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

  if(resultados.length === 0){
    return res.status(404).send(`Erro ${res.statusCode}: No se encontro el curso especificado... `)
  };
  res.send(resultados)
});

routerMatematicas.get('/', (req, res) => {
  const tema = req.params.tema;  
  res.send(infoCursos.matematicas)
});

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema );

  if (resultados.length === 0 ){
    return res.status(404).send(`Error ${res.statusCode}: No se encontro el tema especificado...`)
  };
  res.send(resultados)
});

let PUERTOS = process.env.PORT || 3000;

app.listen(PUERTOS, () => {
  console.log(`Escuchando el puerto ${PUERTOS}`)
})