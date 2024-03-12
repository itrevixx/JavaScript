/* Escribe una función llamada setFirstElement que reciba como parámetro de entrada un 
array y un valor cualquiera. El valor recibido debería reemplazar lo que haya en la primera
posición del array. El array debería ser devuelto.

Ejemplo:

setFirstElement([1, 2], 3); */

const setFirstElement = (newArray, valor) => {
    newArray[0] = valor;
    return newArray;
}
console.log(setFirstElement([1, 2, 3, 4, 5, 6], 4))