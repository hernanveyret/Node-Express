// Response
const http = require('http');
const servidor = http.createServer((req,res) => {
  
});

let puerto = 3000;
servidor.listen(puerto, () => {
  console.log(`Escuchando el puerto ${puerto}...`)
})
