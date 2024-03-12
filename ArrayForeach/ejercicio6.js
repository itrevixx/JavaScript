/* Juego del ahorcado.

Pasos para realizarlo:

Al iniciar el programa, este deberá escoger una palabra al azar entre 4. Esta será la palabra secreta que el usuario deberá adivinar.
Utilizando el siguiente código el programa creará una nueva palabra con tantos guiones bajos como letras tenga la palabra secreta.
El siguiente código contiene una expresión regular (reg exp o regular expresion) : /./g
La primera barra (/) indica que es el comienzo de la expresión regular. La segunda barra(/g , global) indica que se aplicará a todas las ocurrencias. El punto que hay en medio indica que estas ocurrencias serán todos los caracteres.

let hiddenWord = palabraSecreta.replace(/./g, "_ ");
El usuario deberá ir introduciendo letra a letra hasta adivinar la palabra secreta. 

Después de recoger la letra introducida por el usuario, utilizando un bucle for, iremos comparandola con las letras que tiene la palabra secreta. En caso de coincidencia utilizaremos la siguiente función no nativa para hacer el reemplazo (debe estar definida al principio del script):

const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

Uso:

hiddenWord = replaceAt(hiddenWord, letra, i*2);

Para acceder a cada una de las letras de la palabra secreta y compararlas con las letra introducida por el usuario, podremos utilizar la función charAt() de Javascript o acceder a ellas como si fuese un array (palabraSecreta[i]).

Finalmente utilizaremos:
if(hiddenWord.indexOf("_")==-1) 
para comprobar si el usuario ganó.
*/

const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}


const words = ['rinoceronte', 'lagarto', 'cocodrilo', 'jaguar'];
let secretWord = words[Math.floor(Math.random() * words.length)];
let hiddenWord = secretWord.replace(/./g, "_ ");
let hasWon = false;
let attemps = 7;

while (!hasWon) {
    alert(hiddenWord)

    const letter = prompt('Introduce una letra');
    let letterFound = false;


    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter) {
            hiddenWord = replaceAt(hiddenWord, letter, i * 2);
            letterFound = true;
        }
    }
    if (!letterFound) {
        attemps--;
        alert('Has fallado te quedan ' + attemps + ' intentos');
    }
    if (hiddenWord.indexOf("_") == -1) {
        alert('Has ganado. La palabra secreta era: ' + secretWord);
        hasWon = true;
    }
    if (attemps === 0) {
        alert('Game Over❌')
    }
}