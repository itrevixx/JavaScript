/* Vamos a hacer una aplicación que se encargará de calcular el coste de un viaje. Para ello, solicitaremos al usuario el número de noches que pasará fuera y el destino del viaje:

Para calcular el coste final del viaje, desarrollaremos las siguientes tres funciones: costeHotel(), costeAvion(), costeAlquiler()

Llamaremos a estas funciones utilizando el siguiente código:

const numNoches = prompt('numero de noches');
const destino = prompt('destino');
const resultado1 = Number(costeHotel(numNoches));
const resultado2 = Number(costeAvion(destino, numNoches));
const resultado3 = Number(costeAlquilerCoche(numNoches));
console.log("Coste hotel: " + resultado1);
console.log("Coste viaje: ", resultado2);
console.log("Coste alquiler coche: ", resultado3);
console.log("Total:", resultado1 + resultado2 + resultado3); 

A continuación te explico los cálculos que hará cada una de estas tres funciones:

costeHotel()

Crea una función llamada costeHotel() que recibe como parámetro el número de noches. La función debe devolver cuanto es necesario pagar teniendo en cuenta que cada noche cuesta 140 euros.

costeAvion()

La función costeAvion() tiene como parámetro de entrada el nombre de una ciudad y el número de noches. El coste corresponderá al indicado en la siguiente tabla, pero para una estancia de más de tres noches la agencia de viaje nos hará un descuento del 10%.

Los costes por ciudad son los siguientes:
«Oviedo»: 15
«Tokyo»: 700
«Madrid»: 90
«Barcelona»: 90

costeAlquilerCoche()

La función costeAlquilerCoche() tiene como parámetro de entrada el número de noches y devolverá un coste en función de dicho parámetro, teniendo los siguientes aspectos en cuenta:

Cada día de alquiler cuesta 40 €.
Si alquilas un coche por 3 días o más, obtienes un descuento de 20€ sobre el total.
Si alquilas un coche por 7 días o más, obtienes un descuento de 50€ sobre el total (no acumulable con los 20€ de haber alquilado por más de 3 días).

 */


const costeHotel = (noches) => noches * 140;


const costeAvion = (ciudad, noches) => {
    let coste;
    if (destino === 'ovidedo')
        coste = 15;
    else if (destino === 'tokyo')
        coste = 700;
    else if (destino === 'madrid' || destino === 'barcelona')
        coste = 90;
    return noches > 3 ? coste * 0.9 : coste;
}


const costeAlquilerCoche = (noches) => {
    let coste = noches * 40;
    if (noches >= 7) {
        coste -= 50;
    } else if (noches >= 3) {
        coste -= 20;
    }
    return coste;
}

const numNoches = prompt('numero de noches');
const destino = prompt('destino');
const resultado1 = Number(costeHotel(numNoches));
const resultado2 = Number(costeAvion(destino.toLowerCase(), numNoches));
const resultado3 = Number(costeAlquilerCoche(numNoches));
console.log("Coste hotel: " + resultado1);
console.log("Coste viaje: ", resultado2);
console.log("Coste alquiler coche: ", resultado3);
console.log("Total:", resultado1 + resultado2 + resultado3);