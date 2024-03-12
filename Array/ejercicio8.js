/* Leer 10 enteros harcodeados en un array y mostrar la media de 
los valores negativos y la de los positivos. */

let arrayHarcodeados = [4, -6, -8, 0, 7, 6, 8, -2, 0, -5];

let contadorPositivo = 0;
let contadorNegativo = 0;
let sumaPositivo = 0;
let sumaNegativo = 0;

for (let i = 0; i < arrayHarcodeados.length; i++) {
    if (arrayHarcodeados[i] >= 0) {
        sumaPositivo += arrayHarcodeados[i];
        contadorPositivo++;

    }
    else if (arrayHarcodeados[i] < 0) {
        sumaNegativo += arrayHarcodeados[i];
        contadorNegativo++;
    }
}
console.log(sumaPositivo / contadorPositivo);
console.log(sumaNegativo / contadorNegativo);