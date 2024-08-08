// Creando un servidor basico
const http = require('http')

const servidor = http.createServer((req, res) => {
  console.log('Solicitud nueva')
  res.end('Hola Mundo!');
});

const puerto = 3000
servidor.listen(puerto, () => {
  console.log(`Esta escuchando en http://localhost:${puerto}/`);
})
