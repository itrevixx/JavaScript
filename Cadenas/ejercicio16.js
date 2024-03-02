/* Hacer una función contadorDeLetras que reciba como parámetro de entrada una
cadena de texto y una letra y devuelva el número de veces que esa letra esta
  presente en la palabra. Utilizar para ello un bucle for. */

const contadorDeLetras = (txt, letter) => {
  let contador = 0;
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === letter)
      contador++;
  }
  return contador
}
console.log(contadorDeLetras('Holaaldlawdoadsa', 'a'));

