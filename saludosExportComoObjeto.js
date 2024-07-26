function saludar(nombre){
  return `Hola, ${nombre}`;
}
function saludarHolaMundo(){
  return 'Hola Mundo!'
}
module.exports = {
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo
};

/*
opcion mas corta, si el nombre de la funcion es igual a la de la propiedad
no hace falta asignarle el nombre a la propiedad.

module.exports = {
saludar,
saludarHolaMundo
};
*/