// Requues " req "
const http = require('http');

let solicitudes = 0

const servidor = http.createServer((req,res) => {
  console.log('===> req solicitud Nº', solicitudes++ )
  //console.log(req);
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.end('Hola, Mundo')
});
const puerto = 3000
servidor.listen(puerto, () => {
  console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
})