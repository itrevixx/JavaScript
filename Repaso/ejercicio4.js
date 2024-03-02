/* Vamos a desarrollar una aplicación que recibirá el número identificador de tu DNI y te devolverá la correspondiente letra.

Pasos a seguir:

1- Solicitamos al usuario que intruzca su DNI sin letra y lo almacenamos en una constante.
2- Hacer un alert de los datos introducidos (el dni en este caso).
3- Creamos una función para obtener la letra del dni. El parámetro de entrada de esta función será el número recogido del usuario.
    ·La función hará las siguientes validaciones. Si la validación es incorrecta, la función devolverá el valor null.
        -Que el número recogido como parámetro tenga 8 dígitos exactamente.
        -Que el número recogido como parámetro sea un número (y por tanto no tenga letras).
    ·Si la validación ha sido correcta, la función utilizará el siguiente algoritmo para calcular la letra del DNI:
        -Dividimos el valor introducido entre 23. Almacenamos el resto de la división.
        -Utilizamos la función charAt para obtener la letra del DNI. Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E).
4- Llamamos a la función.
5- Mostrar el resultado: en un log */

const DNISinLetra = Number(prompt('Introduce su DNI sin la letra'))

const letterDNI = (userDNI) => {
    if (userDNI.toString().length != 8 || isNaN(userDNI))
        alert('valor null')
    else {
        let resto = userDNI % 23;
        let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        let letra = letras.charAt(resto);
        alert(letra);
    }
}
letterDNI(DNISinLetra)


//La forma con una función auxiliar que me ha dicho Pablo

/* function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

const letterDNI = (userDNI) => {
    if (userDNI.length !== 8 || !isNumeric(DNISinLetra))
        alert('valor null')
    else {
        let resto = userDNI % 23;
        let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        let letra = letras.charAt(resto);
        alert(letra);
    }
}
letterDNI(DNISinLetra) */