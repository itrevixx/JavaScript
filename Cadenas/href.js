/* Obtener el nombre de la página actual.

Pista:
location.href nos devuelve la url completa de la página en la que estoy.

Necesitaremos utilizar los métodos lastIndexOf y substring. 

console.log("La posición de la última 'a' de la palabra es: "  + nombre.lastIndexOf("a")); // 5
onsole.log("Las letras que van desde la tercera hasta la última posición son: " + nombre.substring(2)); //mona
*/

const url = location.href;
const lastSplash = url.lastIndexOf('/');
const page = url.substring(lastSplash + 1);
console.log(page);
