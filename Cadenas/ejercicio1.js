/* Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.

Por ejemplo la siguiente llamada a la función:

longitud("Ana");
Debería devolver 3. */

const longitud = (nombre) => nombre.length;
const longitudWord = longitud('Ana');

console.log("La palabra tiene " + longitudWord + " letras");