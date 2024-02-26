/* Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva
la más larga. En caso de que ambas cadenas sean igual de largas, devolveremos la correspondiente al primer parámetro de la función. */

const devuelveMasLarga = (txt1, txt2) => {
    if (txt1.lenght >= txt2.lenght) {
        return txt1;
    }
    else {
        return txt2;
    }
}
const cadenaMasLarga = devuelveMasLarga('Que', 'Pasa');
console.log(cadenaMasLarga);