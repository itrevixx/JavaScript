/* Escribe una función getLastElement que reciba un array como parámetro de entrada y devuelva el último elemento del array.

Por ejemplo:

getLastElement([1, 2]);
debería devolver 2. */

const getLastElement = (newArray) => {
    return newArray.slice(-1)
}
console.log(getLastElement(['hola', 'que', 'pasa']))