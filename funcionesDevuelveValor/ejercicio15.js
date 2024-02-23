/*  Escribe una función xor que tome dos valores booleanos. Si ambos valores son diferentes, debería devolver true. Si ambos valores son iguales, debería devolver false.

Por ejemplo, las llamadas: 

xor(true, false);
xor(false, true);
deberían devolver true.


Las llamadas

xor(true, true);
xor(false, false);
deberían devolver false.
 */

function xor(bool1, bool2) {
    return (bool1 != bool2);
}
const x = xor(true, true);
console.log(x);