/* Crear y llamar a una función flecha que recibe la velocidad en Km/hora y la devuelva en en metros/hora. 
Recoger el valor devuelto y mostrarlo con un console.log. */

/* const conversion = () => velocidad *= 1000;
console.log(velocidad); */


const conversion = (valor) => {
    const resultado = valor * 1000;
    console.log(resultado)
}

conversion(5);