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

// parametros de ruta
app.get('/api/cursos/programacion/:lenguaje', (req,res) => {
  const lenguaje = req.params.lenguaje;
  const resultado = infoCursos.programacion.filter(c => c.lenguaje === lenguaje);

  if(resultado.length === 0 ){
    return res.status(404).send(`Error: ${res.statusCode}, No se encontro el curso de ${lenguaje}`)
  }
  res.send(resultado)
}),

app.get('/api/cursos/matematicas/:tema', (req,res) => {
  const tema = req.params.tema;
  const resultado = infoCursos.matematicas.filter(c => c.tema === tema);
  console.log(tema)
  if(resultado.length === 0 ){
    return res.status(404).send(`Error: ${res.statusCode}, No se encontro el curso de ${tema}`)
  }
  res.send(resultado)
})

//Varias rutas
app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultado = infoCursos.programacion.filter(c => c.lenguaje === lenguaje && c.nivel === nivel);

  if(resultado.length === 0){
    return res.status(404).send(`Error ${statusCode}, No se encontronel curso especificado.`)
  }
  res.send(resultado);
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
