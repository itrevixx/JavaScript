/* Imprimir los números pares que hay dentro de los 100 primeros números enteros.
El bucle avanzará de uno en uno; no de dos en dos como en el ejercicio anterior.
Utilizaremos el operador % para separar los pares de los impares.
Nota: El operador «%» nos da el resto de dividir un número entre otro.*/

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}