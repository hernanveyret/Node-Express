function ordenarProducto(producto){
    return new Promise((resolve, reject) => {   // La funcion retorna una promesa que determina si esta o no el producto
        setTimeout(() => {
            if(producto === 'taza'){
                resolve('Ordenando una taza.')
            }else{
                reject('No hay stock del producto.')
            }
        },2000);
    })
}
/* Si el producto esta, va a procesar el pedido y retornar un msj */
function procesarPedido(respuesta) {
    return new Promise(resolve => { // Como solo se va procesar el producto si es exitoso, solo ponemos resolve
                                // y usamos una funcion de felcha.
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por tu compra!!!'); // Finaliza la compra.
        },4000);
    })
}

ordenarProducto('taza')// llama a la funcion para pedir el producto
.then(respuesta => {    // si el producto esta llama a la funcion para procesar el pedido
    console.log('Respuesta recibida!');
    console.log(respuesta);
    return procesarPedido(respuesta); // llamando a la funcion que procesa el pedido
})
.then(respuestaProcesada => { // cuando el procesado del pedidoesta finalizado muestra el mensaje de resolve.
    console.log(respuestaProcesada);
})
.catch(error => { // Muestra el msj si hay algun error
    console.log(error)
})