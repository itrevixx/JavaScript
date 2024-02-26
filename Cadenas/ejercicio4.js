/* Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una 
cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número. */

const devuelveEnesimaLetra = (txt, num) => txt[num]
const palabra = devuelveEnesimaLetra('abcdefghijklmnopqrstuvwxyz', 5);
console.log(palabra);