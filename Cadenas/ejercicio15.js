/* Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto
y devuelva una nueva cadena que tendrá un guion medio detrás de cada letra. Utilizar para ello un bucle for.*/

const addGuiones = txt1 => {
    let palabra = '';
    for (let i = 0; i < txt1.length; i++) {
        const letra = txt1[i];
        palabra += letra + '-';
    }
    return palabra;
}
console.log(addGuiones('Hola'));
