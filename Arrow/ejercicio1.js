/* Crear y llamar a una función flecha que recibe un número y muestre su cubo con un console.log. */


/* const cubo = () => Math.pow(5, 5);
const x = cubo();
console.log(x);
 */

const cubo = (valor) => {
    const resultado = valor * valor * valor;
    console.log(resultado)
}
cubo(5);