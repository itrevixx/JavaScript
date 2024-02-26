/* Hacer una función contadorDeLetras2 que reciba como parámetro de entrada 
dos cadenas de texto y una letra y devuelva la cadena de texto en la que dicha 
letra esta más presente. Utilizar para ello un bucle for. No tener en cuenta 
si la letra pasada como parámetro esta en mayúsculas o minúsculas. */

const contadorDeLetras2 = (txt1, txt2, letter) => {
    let contador1 = 0;
    let contador2 = 0;
    for (let i = 0; i < txt1.length; i++) {
        if (txt1[i].toUpperCase() === letter.toUpperCase())
            contador1++;
    }
    for (let j = 0; j < txt2.length; j++) {
        if (txt2[j].toUpperCase() === letter.toUpperCase())
            contador2++;
    }
    if (contador1 < contador2)
        return txt2;
    else if (contador1 > contador2)
        return txt1;
    else
        return txt1 + ' ' + txt2;
}
const palabra = contadorDeLetras2('holaa', 'casa', 'a');
console.log(palabra);