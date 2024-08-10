//const cursos = require('./cursos');
const { infoCursos } = require('./cursos');
const http = require('http');
const servidor = http.createServer((req,res) => {
  const { method } = req; // obtiene el metodo de reques en forma de destructuracion.
  switch(method) {
    case 'GET':
      return manejarSolicitudGET(req,res);
    case 'POST':
      return manejarSolicitudPOST(req,res);
    default :
      res.statusCode = 501
      res.end(`El metodo no puede ser manejado por el servidor: ${method}`);
      break;
  }
});

function manejarSolicitudGET(req,res){
  const path = req.url; // retorna la url.

  console.log(res.statusCode);

  if(path === '/'){ // Si el camino esta en la pagina principal
    // res.statusCode = 200;
    // res.writeHead(200, {'Content-Type':'application/json'}); // para ver como funciona
    return res.end('Bienvenidos a mi primer servidor y API creado con Node.js')
  }else if(path === '/cursos'){
    // res.statusCode = 200;
    return res.end(JSON.stringify(infoCursos)); // convierte el archivo a formato JSON ( texto plano "string" )
  }else if(path === '/cursos/programacion'){
    // res.statusCode = 200;
    return res.end(JSON.stringify(infoCursos.programacion));
  }

  // res.statusCode = 404;
  return res.end('El rescurso solicitado no existe...');
};


function manejarSolicitudPOST(req,res){
  const path = req.url; // Retorna la url 
  if(path === '/cursos/programacion'){
    // res.statusCode = 200;

    let cuerpo = '';

    req.on('data', contenido => { // obtiene el contenido de la solicitud
      cuerpo += contenido.toString(); // pasaa una cadena de caracteres y se agrega a la variable cuerpo
    });

    req.on('end', () => { // cuando finaliza muestra los console.log siguientes
      console.log(cuerpo);
      console.log(typeof cuerpo);

      // Convertir a un objeto de javascript.
      cuerpo = JSON.parse(cuerpo);
      console.log(typeof cuerpo);

      console.log(cuerpo.titulo)

      return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    })
    
    //return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    // FALTA EL CODIGO PARA AGREGAR LA INFORMACION AL JSON
  }
};

const puerto = 3000;
servidor.listen(puerto, () => {
  console.log(`El servdor esta escuchando en el puerto ${puerto}...`)
});

