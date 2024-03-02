/* El usuario debe introducir dos números y un operador y visualizar por consola el resultado de la operación. Las operaciones serán +, -, *, /.

Pasos para resolver el ejercicio:

1. Recogida de datos: numero1, numero2, operador. Los datos que recogemos de un prompt siempre serán texto, así que si queremos utilizar números, utilizaremos:

const n = Number(prompt('Introduce un número'));

2. Hacer un alert de los datos introducidos: numero1, numero2, operador.

3. Calculo de resultado: Utilizaremos la instrucción if-else para evaluar la operación a realizar.

4. Realizar la operación.

5. Mostrar el resultado: en un alert. */

const n1 = Number(prompt('Introduce un número'));
const n2 = Number(prompt('Introduce un segundo número'));
const op = prompt('Introduce la operación a realizar');

if (op === '+') {
    alert(n1 + n2);
}
if (op === '-') {
    alert(n1 - n2);
}
if (op === '*') {
    alert(n1 * n2);
}
if (op === '/') {
    alert(n1 / n2);
}