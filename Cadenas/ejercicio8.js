/* Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra. */

const generarNombre = (txt1, txt2, txt3) => {
    if (txt1.length < 4)
        return 'error'
    else if (txt2.length < 4)
        return 'error'
    else if (txt3.length < 4)
        return 'error'
    else
        return (txt1.charAt(0) + txt2.charAt(0) + txt3.charAt(0))
}
const cadena = generarNombre('Pedro', 'Maria', 'Paola');
console.log(cadena);