/* Escribe una función llamada shortcut que tome dos cadenas de texto 
y devuelva la inicial de cada una de las dos cadenas.

Por ejemplo, la llamada a la función:

shortcut('Amnesty', 'International');
Debería devolver «AI». */

const shortcut = (txt1, txt2) => {
    return txt1.charAt(0) + txt2.charAt(0);
}
const x = shortcut('Ammesty', 'Internacional');
console.log(x);