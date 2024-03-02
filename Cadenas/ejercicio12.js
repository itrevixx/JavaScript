/* Realizar la evaluación del ejercicio anterior sin tener en cuenta si la
 letra pasada como parámetro esta en mayúsculas o minúsculas */

const tieneLetra = (txt, letter) => {
    if (txt.indexOf(letter.toUpperCase()) >= 0)
        return true;
    else
        return false;
}
const cadena = tieneLetra('Ordenador', 'o');
console.log(cadena);

//código simple
const tieneLetra2 = (txt, letter) => txt.toUpperCase().indexOf(letter.toUpperCase()) >= 0;
const cadena2 = tieneLetra2('ordenador', 'O');
console.log(cadena2);
