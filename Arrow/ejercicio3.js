/* Crea y llamar a una función flecha que recibe el ancho y el alto de un rectángulo y devuelva su área.

Recoger el valor devuelto y mostrarlo con un console.log.

Cuando una función recibe varios parámetros, estos irán separados por coma.

calculateArea(width, height); */


const calcularArea = (ancho, alto) => {
    const resultado = ancho * alto;
    console.log(resultado);
}
calcularArea(5, 6);