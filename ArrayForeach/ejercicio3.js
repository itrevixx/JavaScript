/* Contar el número de elementos positivos, negativos y que valgan 
cero en un array de 10 enteros. Los valores habrán sido harcodeados
en un array. La salida por consola debería ser similar a esta:

// Array con valores harcodeados: [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
Cantidad de positivos:  6
Cantidad de negativos:  3
Cantidad de ceros:  1 */

const harcodeados = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
let arrayPositivo = [];
let arrayNegativo = [];
let arrayCero

harcodeados.forEach(function (number) { /* function()	Required. A function to run for each array element. */
    if (number > 0)
        arrayPositivo.push(number);
    else
        arrayNegativo.push(number)
});

console.log(arrayPositivo)
console.log(arrayNegativo)