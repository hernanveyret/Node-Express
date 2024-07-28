// Modulo fs.
const fs = require('fs');

//Leer un archivo
fs.readFile('index.html', 'utf-8', (err, contenido) => {
  if(err){
    console.log('hay un error', err)
    // throw err
  }else {
    console.log(contenido)
  }
  console.log('mensaje')
});

fs.readFile('texto.txt', 'utf-8', (err,contenido) => {
  if(err){
    throw err
  }
  // Para abreviar se puede evitar el else ya que si hay algun error el programa se detiene, pero sino, sigue y muestra el contenido
  console.log(contenido);  
})

// Renombrar un archivo
fs.rename('index.html','main.html',(err)=>{
  if(err){
    throw err;
  }
  console.log('Nombre de archivo cambiado con exito...');
})

// Agregar contenido al final de un archivo.
 fs.appendFile('index.html', '<p>Hola</P>', (err) => {
  if(err){
    throw err;
  }
  console.log('Archivo actualizado...');
 });

 // Reemplaza todo el contenido del archivo.
 fs.writeFile('texto.txt','Nuevo contenido...', (err) => {
  if(err) throw err;
  console.log('Contenido Reemplazado...')
 });

 //Eliminar un archivo
 fs.unlink('main.html', (err) => {
  if(err) throw err;
  console.log('Archivo eliminado...')
 });