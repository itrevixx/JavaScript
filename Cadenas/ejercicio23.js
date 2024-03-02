/* Escribe una función llamada firstWord que reciba como parámetro de entrada
una cadena de texto y devuelva la primera palabra de esa cadena. La primera
palaba de la cadena serán todos los caracteres que hay hasta el primer espacio.

Por ejemplo:

firstWord("see and stop");
debería devolver «see». */

const firstWord = (txt) => {
    let whiteSpace = txt.indexOf(' ');
    const result = txt.substring(0, whiteSpace);
    return result;
}
console.log(firstWord("see and stop"));
