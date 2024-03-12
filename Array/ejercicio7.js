/* Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros. Los valores habrán sido harcodeados en un array. La salida por consola debería ser similar a esta:

// Array con valores harcodeados: [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
Cantidad de positivos:  6
Cantidad de negativos:  3
Cantidad de ceros:  1 */

let arrayHarcodeados = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
let contadorPositivos = 0;
let contadorNegativos = 0;
let contadorCeros = 0;

for (let i = 0; i < arrayHarcodeados.length; i++) {
    if (arrayHarcodeados[i] > 0)
        contadorPositivos++;
    else if (arrayHarcodeados[i] < 0)
        contadorNegativos++;
    else
        contadorCeros++;
}
console.log(contadorPositivos);
console.log(contadorNegativos);
console.log(contadorCeros);