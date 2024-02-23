/* Escribe una función nor que tome como parámetros de entrada dos valores booleanos. Si ambos valores son false, debería devolver true. En cualquier otro caso, el valor devuelto debería ser false.

Por ejemplo, la llamada a la función

nor(false, false);
debería devolver true.

Las llamadas:

nor(true, false);
nor(false, true);
nor(true, true);

deberían devolver false. 
*/

function nor(bool1, bool2) {
    return !(bool1 || bool2);
}
const x = nor(true, true);
console.log(x)

