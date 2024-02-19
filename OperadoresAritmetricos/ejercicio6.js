/* Vamos a mandar al usuario la caja de sus sueños. Para ello, partiremos de los siguientes valores: */

const nombre = 'Juan';
const material = 'madera';
const dimensiones = 'diminutas';
const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';

/* y los concatenaremos para obtener por consola el siguiente mensaje:
«[nombre] ha pedido una caja de [material] con unas dimensiones [dimensiones]. [comentario].

El anterior mensaje, una vez montado, debería haber quedado así:

Juan ha pedido una caja de Madera con unas dimensiones diminutas. Que sea muy bonita, pero de una belleza extraña, indómita. */

const msg1 = nombre + " Ha pedido una caja de " + material + " con unas dimensiones " + dimensiones + " . " + comentario;

console.log(msg1);
