const EventEmitter = require('events');
let producto = 0;
console.log(EventEmitter); // Retorna una clase con varios metodos.

const emisorProductos = new EventEmitter(); // Se crea una nueva instancia de la clase
const sumarproducto = new EventEmitter();

sumarproducto.on('sumar', () => {
  producto++
  console.log(`Cantidad de productos, ${producto}`)
})

emisorProductos.on('compra', () => {
  console.log('Se realizo una compra');
  sumarproducto.emit('sumar')
});
emisorProductos.emit('compra');
emisorProductos.emit('compra');
emisorProductos.emit('compra');

function restar(a,b){
  console.log('La resta de a - b da: ', a-b);
}

emisorProductos.on('restar', restar);
emisorProductos.emit('restar', 1,1);

emisorProductos.on('multi', (a,b) => {
  console.log('Miltiplicar 2: ', a * b);
})

emisorProductos.emit('multi',3,3);