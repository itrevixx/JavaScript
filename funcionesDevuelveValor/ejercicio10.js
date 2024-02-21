/* ¿Qué valor de x se mostrará por consola?

function hola(nombre) {
    return "Hi " + nombre + "!";
}

const h1 = hola("Selva");
const h2 = hola("Pola");
const x = h1 +  " " + h2;
console.log(x); // ¿Qué valor de x se mostrará en la consola? */

function hola(nombre) {
    return "Hi " + nombre + "!";
}

const h1 = hola("Selva");
const h2 = hola("Pola");
const x = h1 + " " + h2;
console.log(x); // ¿Qué valor de x se mostrará en la consola?
// Hi Selva! Hi Pola!
