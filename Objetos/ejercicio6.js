/* Añade un nuevo album al array myMusic. Deberá tener las mismas propiedades, pero con valores diferentes que el primer objeto del array.
Después, añadir un console.log para mostrar el valor del nombre del artista y otro console.log para mostrar el valor del primer elemento del array de formatos del album recien añadido. */


const myMusic = [
    {
        "artista": "Shakira",
        "titulo": "Piano Man",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    },
    {
        "artista": "Pepe",
        "titulo": "Vale",
        "formatos": [
            "mp3",
            "8T",
            "LP"
        ],
        "premios": true
    }
];

console.log(myMusic[0].artista)
console.log(myMusic[1].formatos[0])