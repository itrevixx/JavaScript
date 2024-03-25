/* Dado el siguiente array de datos: [1,2,3]. Calcular el valor medio utilizando la instrucción reduce. 

-Convertir un array en una cadena!!!

const words = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const frase = words.reduce((acc, word) => `${acc} ${word}`);
console.log(frase); // a long time ago in a galaxy far far away

-Acumular valores de un array de objetos, pero sólo cuando cierta propiedad esta presente

const scoreSum = films.reduce((acc, film) => 'score' in film ? parseFloat(acc + film.score) : parseFloat(acc), 0);
*/

const values = [1, 2, 3];

const media = values.reduce((acc, value) => acc + value) / values.length  //acc = accumulator
console.log(media);