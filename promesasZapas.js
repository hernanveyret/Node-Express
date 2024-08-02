const productos = [`Zapatilla`,'Zapato','Ojota','Pantufla','Bota'];

function tomarPedido(producto){
 
  let pedido = productos.filter(e => e.toString().toLowerCase() === producto.toLowerCase()).join().toLowerCase();
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(pedido){
        resolve(`Tomando pedido de ${pedido[0].toUpperCase() + pedido.slice(1).toLowerCase()}`);
      }else{
        reject('No hay stock en este momento!')
      }
    }, 2000);
  })
};

function procesarPedido(){
  return new Promise(resolve => {
    console.log('Su pedido se esta procesando');
      setTimeout(() => {
        resolve('Gracias por su compra!!!');
      }, 3000);
  })
}

tomarPedido('Zapatilla')
  .then(tomarPedido => {
    console.log(tomarPedido);
    return procesarPedido();
  })
  .then(confirmarCompra => {
    console.log(confirmarCompra);
  })
  .catch(err => {
    console.log(err)
  })