/* Crear un método llamado getWomansName() que muestre los nombres de todos 
los personajes femeninos de la película de starwars. Usaremos el método filter y el map. */

/* Crear un método getSmallerPeople() que devuelva un array con los personajes de StarWars restando a cada uno de ellos diez centímetros de altura. Utilizaremos el spread operator. */

/* Crear un método llamado sumaDePeso() que utilizando reduce, calcule la suma del peso de los personajes de starwars. */

/* Crear un método llamado mediaDeAltura() que utilizando reduce, calcule la media de altura de los personajes de starwars. */

/*  Crear un método llamado collectByIndex(index) que recibirá como parámetro de entrada la posición del personaje que queremos seleccionar en el array characters. Este personaje seleccionado lo añadiremos a un array declarado globalmente llamado collectedCharacters. Para esta última parte utilizaremos el método push(). */

let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

const getWomansName = () => {
    //filter para filtrar los femeninos y map para quedarme solo con la propiedad name
    const r = characters.filter(character => character.gender === 'female').map(character => character.name);
    console.log(r);
}

const getSamllerPeople = () => {
    //si voy ha hacer una transformacion de un array de cosas en un array de otras cosas usaremos la función map
    //devolver la propiedad original con la funcion spread y con la altura modificada
    const r = characters.map(character => ({ ...character, height: character.height - 10 }))
    console.log(r)
}

const sumaDePeso = () => {
    const r = characters.reduce((acc, character) => acc + Number(character.mass), 0)
    console.log(r)
}

const mediaDeAltura = () => {
    const r = characters.reduce((acc, character) => acc + Number(character.height), 0) / characters.length;
    console.log(r)
}
//Crear un método llamado collectByIndex(index) que recibirá como parámetro de entrada la posición del personaje que queremos seleccionar en el array characters. Este personaje seleccionado lo añadiremos a un array declarado globalmente llamado collectedCharacters. Para esta última parte utilizaremos el método push(). 
const collectByIndex = (index) => {
    const r = characters[index];
    collectedCharacters.push(r);
    console.log(r)
}
/* Crear un método llamado collectByName(characterName) que recibirá como parámetro de entrada el nombre del personaje que queremos coleccionar y lo añadirá a un array declarado globalmente llamado collectedCharacters. Utilizaremos los métodos push() y find(). */

const collectByName = (characterName) => {
    const r = characters.find(character => character.name === characterName);
    collectedCharacters.push(r);
    console.log(r)
    /* const choosedUser = users.find(user => user.name === "Juan") */
}

/* Crear un método llamado removeByName(characterName) que elimine del array collectedCharacters los personajes cuyo nombre sea characterName. Para ello, utilizando filter, extraeremos del array collectedCharacters los personajes cuyo nombre no coincide con el parámetro recibido. */

const removeByName = (characterName) => {
    const r = collectedCharacters.filter(character => character.name !== characterName)
    console.log(r)
}

//Crear un método llamado getCharacterFilms(characterName) que reciba como parámetro el nombre de un personaje y muestra las urls de las películas en las que ha intervenido.

const getCharacterFilms = (characterName) => {
    const r = characters.filter(character => character.name === characterName).map(url => url.films)
    console.log(r)
}

/*  Crear un método llamado collectByName2(characterName) que recibirá como parámetro de entrada el nombre del personaje que queremos coleccionar y lo añadirá a un array declarado globalmente llamado collectedCharacters2. Cada objeto añadido a este array tendrá una propiedad llamada amount, de tal forma que si añadimos varias veces el mismo objeto, en lugar de que ese objeto aparezca varias veces, aparecerá una sola vez, pero con la propiedad amount aumentada el número de veces que fue añadido. Utilizaremos los métodos push() y find(). */

const collectByName2 = (characterName) => {
    const char = collectedCharacters2.find(character => character.name === characterName);
    if (char) {
        char.amount++;
    } else {
        const selectedCharacter = characters.find(character => character.name === characterName);
        collectedCharacters2.push({ ...selectedCharacter, amount: 1 });
    }
    console.log(collectedCharacters2);
}

/* Crear un método llamado mediaDeAltura2() que utilizando reduce, calcule altura media de los personajes que hay en el array collectedCharacters2. */
const mediaDeAltura2 = () => {
    const r = collectedCharacters2.reduce((acc, character) => acc + Number(character.height), 0);
    console.log(r)
}
//Crear un método llamado removeByName2(charactersName) que utilizando filter, obtenga a partir del array collectedCharacters2 los personajes cuyo nombre no coincide con el parámetro recibido.

const removeByName2 = (characterName) => {
    const r = collectedCharacters2.filter(character => character.name !== characterName)
    console.log(r);
}
fetch('https://swapi.py4e.com/api/people')
    .then(res => res.json())
    .then(data => {
        characters = data.results;
        console.log(characters);
        getWomansName();
        getSamllerPeople();
        sumaDePeso();
        mediaDeAltura();
        collectByIndex(2);
        collectByName('Luke Skywalker');
        removeByName('Luke Skywalker');
        getCharacterFilms('Luke Skywalker');
        collectByName2('Darth Vader');
        collectByName2('Darth Vader');
        collectByName2('Darth Vader');
        collectByName2('Luke Skywalker');
        collectByName2('Luke Skywalker');
        mediaDeAltura2();
        removeByName2('Luke Skywalker');
    });

