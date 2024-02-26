/* Realizar la evolución del ejercicio anterior sin tener en cuenta si la 
letra pasada como parámetro esta en mayúsculas o minúsculas */

const contadorDeLetras = (txt, letter) => {
    let contador = 0;
    for (let i = 0; i < txt.length; i++) {
        if (txt[i].toUpperCase() === letter.toUpperCase())
            contador++;
    }
    return contador
}
const palabra = contadorDeLetras('Holaaldlawdoadsa', 'a');
console.log(palabra);
