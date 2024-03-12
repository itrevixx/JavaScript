/* Recorre el array anterior para obtener un nuevo array con los usuarios activos.

const result = numeros.filter(num => num < n_introducido);*/


const users = [
    {
        "name": "Paco",
        "isActive": false,
        "edad": 18
    },
    {
        "name": "Laura",
        "isActive": false,
        "edad": 21
    },
    {
        "name": "Raquel",
        "isActive": false,
        "edad": 15
    },
    {
        "name": "Juan",
        "isActive": true,
        "edad": 17
    },
    {
        "name": "Alberto",
        "isActive": false,
        "edad": 50
    },
    {
        "name": "Rodolfo",
        "isActive": true,
        "edad": 7
    },
];

const usersActive = users.filter(user => user.isActive);
console.log(usersActive)

/* Recorre el array anterior para obtener un array con los usuarios mayores de 18 años. */

const usersAge = users.filter(user => user.edad > 18);
console.log(usersAge)