/* Calcular número secreto

Pasos para resolver el ejercicio:

1- Almacenar en una constante un número aleatorio, que será el número secreto. Dicho número estará entre 1 y 5.
2- Hacer un alert del número aleatorio.
3- Recogida del valor introducido por el usuario.
4-Utilizaremos la instrucción if-else para evaluar si el número introducido coincide con el número secreto.
5- Mostrar el resultado: en un alert. */

const randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
alert('El numero a adivinar entre 1 y 5 es: ' + randomNumber);
const userNumber = Number(prompt('Introduce un numero'));


if (userNumber === randomNumber)
    alert('Has acertado!!😎');
else {
    alert('Has fallado😪');
}
alert('🎆¡¡Fin del juego.!!🎆')
