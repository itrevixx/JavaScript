/* Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra. */

const generarNombre2 = (txt1, txt2, txt3) => {
    if (txt1.length < 4)
        return 'error'
    else if (txt2.length < 4)
        return 'error'
    else if (txt3.length < 4)
        return 'error'
    else
        return (txt1.charAt(txt1.length - 1) + txt2.charAt(txt2.length - 1) + txt3.charAt(txt3.length - 1))
}
const cadena = generarNombre2('Pedro', 'Maria', 'Paola');
console.log(cadena);