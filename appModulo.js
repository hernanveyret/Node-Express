const saludo = require('./saludo.js'); // se le asigna a saludo lo que traiga de saludo.js
const saludos = require('./saludos.js'); // se le asigna a saludos lo que traiga de saludos.js
const saludosObjeto = require('./saludosExportComoObjeto.js') // se le asigna a saludosObjeto las funciones que traiga exportadas del archivo.

// DESESTRUCTURACION
const { saludar, saludarHolaMundo } = require('./saludosExportComoObjeto.js')

console.log('Importa una funcion ',saludo) // importamos una sola funcion, retorna un objeto con una sola propiedad.
console.log('Importa dos funciones opcion uno: ',saludos) // importamos 2 funciones, retorna un objeto con dos propiedades.
console.log('Importa dos funciones opcion dos: ',saludosObjeto); // retorna un objeto con las propiedades.

//IMPORTACION DE FUNCIONES UNA POR UNA
console.log(saludo.saludar('hernan')) // Muestra el contenido de la funcion
console.log(saludos.saludarHolaMundo()) // muestra el contenido de la funcion

// IMPORTACION DE FUNCIONES TODAS JUNTAS EN UN OBJETO
console.log(saludosObjeto.saludar('Clotildo')); // Muestra el contenido de la funcion
console.log(saludosObjeto.saludarHolaMundo()); // Muestra el contenido de la funcion

// IMPORTANDO FUNCIONES USANDO LA DESESTRUCTURACION 
console.log(saludar('Clotilde'));
console.log(saludarHolaMundo()); // Retorna lo que traiga la funcion desestructurada

