function ordenarProducto(producto){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(producto === 'lapiz'){
          resolve('Tomando pedido')
      }else{
          reject('No hay stock actualmente.')
      }
    },2000)
  })
}

function procesarPedido(){
  return new Promise(resolve => {
    console.log('Su pedido se esta procesando');
      setTimeout(() => {
        resolve('Gracias por su compra!!!');
      }, 3000);
  })
}

async function realizarPedido(producto){
  try{
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recivida');
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada)
  }catch(error) {
    console.log(error)
  }
};
realizarPedido('lapiz')