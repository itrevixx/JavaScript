/* Modificar la siguiente función para que devuelva Inside si val está entre 10 y 20 inclusive y Outside en caso contrario.

function test(val) {
    if (val) { // Cambia esta línea
        return "Inside";
    }else {
        return "Outside";
    }
} */

function test(val) {
    if (val <= 20 && val >= 10) {
        return "Inside";
    } else {
        return "Outside";
    }
}
const x = test(12);
console.log(x);