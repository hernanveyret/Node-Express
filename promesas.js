const promesaCumplida = false; // se simula el exito o rechazo de la promesa

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(promesaCumplida){
      resolve('Promesa cumplida');
    }else{
      reject('Promesa rechazada...')
    }
  },3000);
});
/* opcion uno para mostrar que pasa si la proimesa es exito o rechazada
const manejarExito = ( valor ) => {
  console.log(valor);
}
const manejarRechazo = ( razonRechazo ) => {
  console.log(razonRechazo);
}

miPromesa.then(manejarExito, manejarRechazo);
*/

/*
opcion 2, usando .then().catch().finaly()
*/
miPromesa.then((valor) => {
  console.log(valor);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log('Que tengas un buen dia!!!')
});