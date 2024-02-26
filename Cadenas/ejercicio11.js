/* Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva 
true si la letra esta presente en la palabra y false si no lo esta. Utilizar para ello el método indexOf. */

const tieneLetra = (txt) => {
    if (txt.indexOf('c') >= 0)
        return true;
    else
        return false;
}
const cadena = tieneLetra('Ordenador');
console.log(cadena);