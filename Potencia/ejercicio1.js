/* Partiendo de los siguientes datos iniciales:

const base = 2;
const exponente = 5;

Calcular la quinta potencia de 2 utilizando un bucle para ir realizando en cada iteración la misma operación de multiplicación. */



const base = 2;
const exponente = 5;
let resultado = 1;

for (let i = 1; i <= exponente; i++) {
    resultado *= base
}
console.log(resultado)

//factorial

let num = 5;
let resultado2 = 1;

for (let i = num; i > 0; i--) {
    resultado2 *= i;
}
console.log(resultado2)