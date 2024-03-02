/* Realizar la evolución del ejercicio anterior sin tener en cuenta si la 
letra pasada como parámetro esta en mayúsculas o minúsculas */

const contadorDeLetras = (txt, letter) => {
    let contador = 0;
    const letterUpper = letter.toUpperCase; //se declara las const fuera de la función fuera del bucle para reducir tiempo
    const txtUpper = txt.toUpperCase;
    for (let i = 0; i < txt.length; i++) {
        if (txt[i].toUpperCase() === letter.toUpperCase())
            contador++;
    }
    return contador
}
console.log(contadorDeLetras('HolAaldlawdoadsa', 'a'));
