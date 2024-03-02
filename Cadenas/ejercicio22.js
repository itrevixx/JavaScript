/* Escribe una función llamada indexOfIgnoreCase que reciba dos 
cadenas de texto y devuelva la posición de la primera ocurrencia
de la segunda cadena de texto en la primera. La función no debería 
tener en cuenta mayúsculas y minúsculas.

Por ejemplo:

indexOfIgnoreCase("bit","it");
y
indexOfIgnoreCase("bit","IT");

deberían devolver 1 */

const indexOfIgnoreCase = (txt1, txt2) => {
    return txt1.toUpperCase().indexOf(txt2.toUpperCase());
}
console.log(indexOfIgnoreCase('bit', 'IT'));