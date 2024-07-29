const curso = require('./curso.json');

console.log(typeof curso);
console.log(curso.titulo);

let infoCurso = {
  "titulo": "ApendeNode.js",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas" : [
    "Javascript",
    "Node.Jd"
  ],
  "esPublico": true
}

let infoCursoJSON = JSON.stringify(infoCurso); // Convierte de obj a string JSON
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

let infoCursoObj = JSON.parse(infoCursoJSON); // Convertimos el string JSON a OBJ de javascript. 
console.log(infoCursoObj);
console.log(typeof infoCursoObj);