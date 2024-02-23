/* Escribe una función nand que tome como parámetros de entrada dos valores booleanos. Si ambos valores son true, debería devolver false. En cualquier otro caso, debería devolver true.

Por ejemplo, la llamada

nand(true, true);
debería devolver false.

Las llamadas:

nand(true, false);
nand(false, true);
nand(false, false);

deberían devolver true. */


function nand(bool1, bool2) {
    return !(bool1 && bool2)
}
const x = nand(true, false);
console.log(x)