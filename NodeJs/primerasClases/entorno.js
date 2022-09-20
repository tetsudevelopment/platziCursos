// Varibles de entorno

// Desde años las variables de entorno se escriben en mayuscula en caso de tener dos palabras se les agrega un guion bajo para separarlas MI_WEB

let saludo = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo Web';
console.log('Hola ' + saludo);
console.log('Mi web es ' + web);
console.log('Cambio');


