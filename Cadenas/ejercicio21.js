/*  Escribe una función llamada firstChar, que devuelva la primera letra 
que no sea un espacio cuando una cadena de texto es pasada.

Para ello, podemos eliminar los espacios en blanco que pudiera haber al 
principio y al final de la cadena de texto utilizando la el método trim().
Si no estás muy seguro de como funciona este método, consúltalo en
internet, que no es tan difícil!.

Por ejemplo, la llamada a la función:

firstChar(" Rosa Parks ");
Debería devolver R. */

const firstChar = (txt) => {
    return txt.trim()[0];
}
const x = firstChar("   Rosa Parks");
console.log(x);