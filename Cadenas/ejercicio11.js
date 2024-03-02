/* Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva 
true si la letra esta presente en la palabra y false si no lo esta. Utilizar para ello el método indexOf. */

const tieneLetra = (txt, letter) => {
    if (txt.indexOf(letter) >= 0)
        return true;
    else
        return false;
}
const cadena = tieneLetra('Ordenador', 'r');
console.log(cadena);

//código simple
const tieneLetra2 = (txt, letter) => txt.indexOf(letter) >= 0  //el mayor o igual es un bool, regresa un true o false
const cadena2 = tieneLetra2('Ordenador', 'r');
console.log(cadena);