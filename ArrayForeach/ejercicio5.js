/* Tres en raya con alert y prompt.

Hacer el juego del tres en raya para dos jugadores.

Tendremos un bucle while con una condición que evalúa la variable haGanadoAlguien. Mientras que sea false, el bucle se irá ejecutando. Cuando sea true, el bucle terminará. 

Pasos de resolución. Los siguientes pasos los daremos dentro de un bucle while, aunque este no lo implementaremos hasta el paso 5.

1. Mostramos el tablero llamando al método printBoard(). El tablero es un array de 9 posiciones.

2. Solicitamos al usuario que introduzca un número del 0 al 8.

3. Pondremos una X en la posición del array introducida por el usuario.

4. Metemos toda la lógica del juego dentro un bucle while, de tal forma que en cada iteración se solicite al jugador la posición a la que desea mover y coloquemos la ficha X.

5. Ahora intentaremos no colocar siempre la misma ficha, (X), sino colocar una X o una O en función del jugador al que le tocaba mover. Para ello, cambiamos una variable booleana que determinará a que jugador le tocaba jugar:

isPlayer1 = !isPlayer1;

6. Comprobamos si el jugador actual ha ganado llamando al método evaluateWin(). Si ha ganado, lo indicamos con un mensaje de alerta y cambiaremos el valor de la variable booleana que nos sirve como condición para seguir jugando.

El método evaluateWin() comprobará, mediante sucesivos if, si un jugador ha ganado. Devolverá true si lo ha logrado y false si no. Ten en cuenta que al principio de la partida como todas las casillas contienen un guión bajo (_) devolverá true. Este método debe evaluar que tres casillas son iguales y que ninguna de ellas es igual a un guión bajo.
*/

const board = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];

const printBoard = () => {
    alert(board[0] + "|" + board[1] + "|" + board[2] + "\n" + board[3] + "|" + board[4] + "|" + board[5] + "\n" + board[6] + "|" + board[7] + "|" + board[8]);
}

const evaluateWin = () => {
    if (board[0] === board[1] && board[0] === board[2] && board[0] != '_')
        return true;
    else if (board[3] === board[4] && board[3] === board[5] && board[3] !== '_')
        return true;
    else if (board[6] === board[7] && board[7] === board[8] && board[6] !== '_')
        return true;
    else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '_')
        return true;
    else if (board[1] === board[4] && board[1] === board[7] && board[1] !== '_')
        return true;
    else if (board[2] === board[5] && board[2] === board[8] && board[2] !== '_')
        return true;
    else if (board[0] === board[4] && board[0] === board[8] && board[0] !== '_')
        return true;
    else if (board[2] === board[4] && board[2] === board[7] && board[2] !== '_')
        return true;
    else
        return false;
}

printBoard();
const hasAnyBodyWon = false;
let isPlayer1 = true;

while (!hasAnyBodyWon) {
    const player = isPlayer1 ? 'X' : 'O';
    const n = prompt('Introduzca un número del 0 al 8, player ' + player + ':');
    board[n] = player;

    if (evaluateWin()) {
        alert('Enhorabuena jugador ' + player);
        hasAnyBodyWon = true;
    } else {
        isPlayer1 = !isPlayer1;
        printBoard();
    }
}
