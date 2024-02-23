/* Crear estas dos funciones flecha:

calculatePerimeter(radius); 
Perímetro de la circunferencia = 2*Math.PI*radio

calculateArea(radius); 
Área de la circunferencia = Math.PI*radio*radio

Recoger los valores devueltos por las funciones y mostrarlos con un console.log. */

const calculatePerimeter = (radio) => {
    const perimetro = 2 * Math.PI * radio;
    console.log(perimetro)

}

const calculateArea = (radio) => {
    const area = Math.PI * radio * radio;
    console.log(area)

}
calculatePerimeter(5);
calculateArea(5);