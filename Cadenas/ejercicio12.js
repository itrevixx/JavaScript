/* Realizar la evaluación del ejercicio anterior sin tener en cuenta si la
 letra pasada como parámetro esta en mayúsculas o minúsculas */

const tieneLetra = (txt) => {
    if (txt.indexOf('c') >= 0)
        return true;
    else
        return false;
}
const cadena = tieneLetra('Ordenador');
console.log(cadena);