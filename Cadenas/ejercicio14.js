/* Completar el ejercicio anterior haciendo que en la nueva palabra generada
 las letras esten en mayúsculas. */

const crearPalabra = (letter, num) => {
    let palabra = '';
    for (let i = 0; i < num; i++) {
        palabra += letter.toUpperCase();
    }
    console.log(palabra);
}
crearPalabra('a', 5);

