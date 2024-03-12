/* Leer 10 enteros harcodeados en un array y mostrar la 
media de los valores negativos y la de los positivos. */

const harcodeados = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];

let sumaPositivo = 0;
let sumaNegativo = 0;
let contadorPositivo = 0;
let contadorNegativo = 0;

harcodeados.forEach(function (number) {
    if (number >= 0) {
        sumaPositivo += number;
        contadorPositivo++;

    }
    else {
        sumaNegativo += number;
        contadorNegativo++;
    }
});
console.log(sumaPositivo / contadorPositivo);
console.log(sumaNegativo / contadorNegativo);