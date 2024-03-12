/* 1. Nuestro heroe entra en una mazmorra con dos puertas. La puerta 1 y la puerta 2. Una puerta lleva a una muerte segura y la otra a otra mazmorra.

Generaremos un número aleatorio que determinará cual es la puerta correcta.

2. Tanto si el heroe entra en la mazmorra buena como en la mazmorra mala, le informaremos con un mensaje de alerta del tipo de mazmorra en que ha entrado. Si el heroe entra en una mazmorra buena, se repetirá el proceso de solicitarle que escoja la puerta correcta de manera indefinida. Si entra en la mazmorra mala, terminaremos el juego rompiendo el bucle while.

*/


let play = true;

while (play) {
    const userNumber = Number(prompt('Entras en una mazmorra con dos puertas.La puerta 1 y la puerta 2. Tras una de las dos puertas, se encuentra una muerte segura. ¿Qué puerta escoges ? 1 / 2'))
    const randomNumber = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    if (userNumber === randomNumber)
        alert('Has escogido sabiamente')
    else {
        alert('Has muerto')
        play = false;
    }
}