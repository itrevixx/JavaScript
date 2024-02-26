/* Escribe una función llamada toCase que reciba como parámetro de
entrada una cadena de texto y devuelva esa misma cadena de texto 
en minúsculas, un guión medio y de nuevo esa misma cadena de texto en mayúsculas.

Por ejemplo, la siguiente llamada a la función:

toCase("Pablo");
Debería devolver: «pablo-Pablo» */

const toCase = txt => {
    return txt.toLowerCase() + '-' + txt.toUpperCase();
}
const x = toCase('Hola');
console.log(x);