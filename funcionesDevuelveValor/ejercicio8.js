/* Combina las sentencias if en un único bloque de tipo if/else.

function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Mayor que 5";
    }

    if (val <= 5) {
        result = "Menor o igual a 5";
    }
    return result;
} */

function testElse(val) {
    let result;
    if (val > 5) {
        result = "Mayor que 5";
    }

    else {
        result = "Menor o igual a 5";
    }
    return result;
}
const x = testElse(2);
console.log(x);
