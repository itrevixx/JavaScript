/* Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga. En caso de que al menos dos cadenas tengan igual longitud, devolveremos el texto Hay al menos dos cadenas iguales. */

const devuelveMasLarga2 = (txt1, txt2, txt3) => {
    if ((txt1.length > txt2.length) && (txt1.length > txt3.length))
        return txt1;
    else if ((txt2.length > txt1.length) && (txt2.length > txt3.length))
        return txt2;
    else if ((txt3.length > txt1.length) && (txt3.length > txt2.length))
        return txt3;
    else
        return 'Hay al menos dos cadenas iguales'
}
const cadenaMasLarga = devuelveMasLarga2('Holas', 'que', 'pasa!');
console.log(cadenaMasLarga);