const miURL = new URL('https://www.ejemplo.org/cursos/programacion/?ordenar=vistas&nivel=1');

//console.log(miURL);
console.log(miURL.hostname); // www.ejemplo.org
console.log(miURL.pathname); // /cursos/programacion/
console.log(miURL.searchParams); // { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(miURL.searchParams.get('ordenar')) // vistas
console.log(miURL.searchParams.get('nivel')) // vistas
console.log(miURL.href);


