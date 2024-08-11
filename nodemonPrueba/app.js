const http = require('http');
const servidor = http.createServer((req,res) => {
  let estado = res.statusCode
  console.log(estado)
  //res.end('hola, tu estado de coneccion es: ' + estado + ' OK');
  res.end(`hola, tu estado de coneccion es: ${estado}, OK`);
});

let puerto = 3000;
servidor.listen(puerto, () => {
  console.log(`Se esta escuchando el puerto ${puerto}...`);
})