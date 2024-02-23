/* Crear y llamar a una función flecha que recibe la base y la altura de un triángulo y devuelva su área.

Recoger el valor devuelto y mostrarlo con un console.log.
Área triángulo = base*altura/2 */

const calcularAreaTriangulo = (base, altura) => {
    const area = base * altura / 2;
    console.log(area);
}
calcularAreaTriangulo(3, 3);