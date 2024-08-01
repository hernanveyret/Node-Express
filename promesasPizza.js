
const statusPedido = () => {
    return Math.random() < 0.8;
}
const estado = statusPedido();

console.log('Ressultado inicial de status ', estado )

const miPedido = new Promise((resolve,reject) => {
    setTimeout(() => {
        
        if(estado){
            resolve(`Su pedido esta en camino: Estado:', ${estado}`)
        }else{
            reject(`Hubo un error, vuelva a intentar! Estado: , ${estado}`)
        }
    }, 3000);
});

miPedido.then((valor) => {
    console.log(valor);
})
.catch((error) => {
    console.log(error);
});