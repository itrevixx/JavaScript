/* Hacer una función contadorDeLetras2 que reciba como parámetro de entrada 
dos cadenas de texto y una letra y devuelva la cadena de texto en la que dicha 
letra esta más presente. Utilizar para ello un bucle for. No tener en cuenta 
si la letra pasada como parámetro esta en mayúsculas o minúsculas. */

const contadorDeLetras2 = (txt1, txt2, letter) => {
    let contador1 = 0;
    let contador2 = 0;
    const txt1Upper = txt1.toUpperCase();
    const txt2Upper = txt2.toUpperCase();
    const letterUpper = letter.toUpperCase();
    for (let i = 0; i < txt1.length; i++) {
        if (txt1Upper[i] === letterUpper)
            contador1++;
        /* console.log(3333)  usar cgl para comprobar cada paso*/
    }
    for (let j = 0; j < txt2.length; j++) {
        if (txt2Upper[j] === letterUpper)
            contador2++;
    }
    if (contador1 < contador2)
        return txt2;
    else if (contador1 > contador2)
        return txt1;
    else
        return txt1 + ' ' + txt2;
}
console.log(contadorDeLetras2('holaaa', 'casa', 'a'));

