/* Imprimir los números del 1 al 20.

Para números divisibles por 3, imprimir “Fizz”.
Para números divisibles por 5, imprimir “Buzz”.
Para números divisibles por 3 y 5, imprimir “FizzBuzz”.
En cualquier otro caso, imprimir el número. */

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}