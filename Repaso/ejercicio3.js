/*Calcular número secreto con 3 oportunidades

Pasos para resolver este ejercicio:

1- Almacenar en una constante un número aleatorio, que será el número secreto.
2- Hacer un alert del número aleatorio.
3- Los siguientes pasos los daríamos en cada una de las iteraciones de un bucle while. Estos pasos se repetirán hasta que transcurran 3 intentos o el usuario acierte el número secreto.:
    3.1- Recogida de un número mediante un prompt.
    3.2- Calculo de resultado: Utilizaremos la instrucción if-else para evaluar si el número introducido coincide con el número secreto
    3.3- Mostrar el resultado en un alert.
4- Hacemos un alert de fin del juego*/

const randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let play = true;
let attempts = 0;

while (play) {
    /* alert(randomNumber) */
    const userNumber = Number(prompt('Adivina el numero entre el 1 y el 10'));
    if (randomNumber === userNumber) {
        alert('¡¡Has acertado el numero.!!😎')
        break;
    }
    else {
        alert('¡¡Has fallado, intentalo de nuevo.!!')
        attempts++;
        if (randomNumber > userNumber)
            alert('El numero es mas grande que ' + userNumber + '!!')
        else if (randomNumber < userNumber)
            alert('EL numero es mas pequeño que ' + userNumber + '!!')
        if (attempts === 3) {
            play = false;
            alert('¡¡Has peridido.!!🤡🤡')
        }
    }
}
alert('🎆¡¡Fin del juego.!!🎆')

