/* Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y
 genere una nueva palabra que tenga la letra introducida repetida tantas veces como indique el número */

const crearPalabra = (letter, num) => {
    let palabra = '';
    for (let i = 0; i < num; i++) {
        palabra += letter;
    }
    return palabra;

}
console.log(crearPalabra('a', 5));
