/*  El IVA para ciertos artículos es del 21%. Realiza un programa que a partir de una constante precio inicializada con valor 100, calcule el precio con IVA. */

const precio = 100;
let IVA = 21 / 100;
let ConIVA = (100 * IVA) + precio;

console.log(ConIVA + "€");