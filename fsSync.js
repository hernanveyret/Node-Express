// Modulo fs. sincronico
const fs = require('fs');

//Leer un archivo
  console.log('Antes de leer un archivo')
const archivoUno = fs.readFileSync('index.html', 'utf-8');
  console.log(archivoUno);
console.log('Antes de leer otro archivo')
const archivoDos = fs.readFileSync('texto.txt', 'utf-8', )
console.log(archivoDos)
  console.log('Despues de leer los 2 archivos')

  console.log('Antes de cambiar el nombre del archivo')
// Renombrar un archivo
fs.renameSync('index.html','main.html')
console.log('Despues de cambiar el nombre del archivo')

console.log('Antes de agregar contenido en un archivo')
// Agregar contenido al final de un archivo.
 fs.appendFileSync('index.html', '<p>Hola</P>')
  console.log('Despues de agregar contenido a un archivo')

  console.log('Antes de reemplazar el contenido de un archivo')
 // Reemplaza todo el contenido del archivo.
 fs.writeFileSync('texto.txt','Nuevo contenido...');
 console.log('Despues de reemplazar el contenido de un archivo')

 console.log('Antes de eliminar un archivo')
 //Eliminar un archivo
 fs.unlinkSync('main.html')
 console.log('despues de eliminar un archivo')