/* Inserta el código necesario para que esta estructura de control Switch funcione también con el amarillo.*/

const color = 'amarillo';
switch (color) {
    case 'rojo':
        console.log('Has escogido rojo');
        break;
    case 'azul':
        console.log('Has escogido azul');
        break;
    case 'amarillo':
        console.log('Has escogido amarillo');
        break;
    default:
        console.log('No has escogido ningún color de la lista!');
}