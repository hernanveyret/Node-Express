const frutas = ['manzana', 'sandia','banana','pera'];

function pedirProducto(producto){
  let productoOk = frutas.find(e => e === producto);
  return new Promise(( resolve,reject ) => {
    setTimeout(() => {
      if(productoOk){
        resolve(`Su pedido de ${productoOk} fue recibido.`)
      }else{
        reject('No hay stock por el momento.')
      }
    }, 2000)
    
  })
}

function embalandoPedido(producto){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Su pedido de ${producto} entro en el centro de distribuicion.`);
    }, 2000);
  })
}

function finalizarPedido(){
  return new Promise(resolve => {
    console.log('Procesando su peido');
    setTimeout(() => {
      console.log('Su pedido fue despachado')
      resolve('Gracias por su compra')
    }, 3000);
  })
}

async function hacerPedido(producto){
  try{

    const res = await pedirProducto(producto);
      console.log(res);
    const resDistribuicion = await embalandoPedido(producto);
      console.log(resDistribuicion)
    const envioPedido = await finalizarPedido();
      console.log(envioPedido);

  }catch(error){
    console.log(error)
  }
};
hacerPedido('manzana')