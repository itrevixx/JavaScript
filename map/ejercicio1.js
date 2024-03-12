/* A partir de un array con cinco nombres de persona, recórrelo con un map para obtener un nuevo array con el texto «Conozco a alguien llamado » precediendo a cada nombre. */

const names = ['Pedro', 'Paco', 'Paca', 'Joseph', 'Frank'];

const allNames = names.map(names => 'Conozco a alguien llamado ' + names);


console.log(allNames);