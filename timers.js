// Modulo timers:

// setTimeout(funcion,retraso,argumentos)

function mostrarTema(temaUno, temaDos){
  console.log(`estoy aprendiendo ${temaUno} y ${temaDos}`)
}

function sumar(a,b){
  console.log(a + b)
}

setTimeout(mostrarTema, 5000, 'Node.js', 'Javascript'); // se muestra a los 5 segundos
setTimeout(sumar, 2000, 5,6); // se muestra a los 2 segundos

console.log('Antes de ejecutar setImmediate()') // se ejecuta primero
setImmediate(mostrarTema, `html`, 'css'); // se muestra despues del console.log

setInterval(mostrarTema, 3000, 'React', 'Express.js') // Cada 3 segundos va a mostrar el mensaje b