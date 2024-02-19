/* Hacer un conversor de grados centígrados a grados Fahrenheit. Para ello deberé multiplicar los grados centígrados por 9/5 y sumar 32. Para comprobar que hemos hecho los cálculos correctamente, partiremos de una constante llamada centigrados que valdrá 20. En este caso, los grados fahrenheit deberían ser 68. */

const centigrados = 20;
let Fahrenheit = centigrados * (9 / 5) + 32;

console.log(Fahrenheit);