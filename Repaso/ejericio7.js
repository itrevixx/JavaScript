/* Los siguientes pasos de resolución del ejercicio estarán dentro de un bucle while que se repetirá hasta que el usuario inserte y valide correctamente su nombre.

1. Se solicita al usuario la introducción de su nombre.

2. Si el nombre introducido no tiene números, le preguntamos al usuario si ese es su nombre real. Si el usuario responde que no, volvemos a comenzar el proceso con una nueva iteración del bucle.
Para evaluar que el nombre introducido por el usuario no contenga ningún número debes buscar una función en internet que devuelva true o false en función de si la cadena recibida como parámetro tiene o no un número.

3. Si el usuario responde que ese es su nombre real, rompemos el bucle.

4. Si el nombre introducido en el paso 1 tenía un número, volvemos a comenzar el proceso con una nueva iteración del bucle.

 */

let formulario = true;

function hasNumber(myString) {
    return /\d/.test(myString);
}

while (formulario) {
    const userName = prompt('Introduzca su nombre')
    if (hasNumber(userName)) {
        alert('Su nombre no puede conterner un numero')
    }
    else {
        const respuesta = prompt('Es ' + userName + ' su nombre real? Si o No')
        if (respuesta === 'Si') {
            alert('Hola ' + userName)
            break;
        }
        else if (respuesta === 'No') {
            alert('Introduzca su nombre real')
        }
    }
}
