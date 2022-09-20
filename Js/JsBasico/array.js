//esto es un array []
var frutas = ['Manzana', 'Plátano', 'Cereza', 'Fresa'];
// length me ayuda a ver la longitud de los elemento, es decir la cantidad de elementos que tiene mi array
// console.log(frutas.length);

// al escribir el nombre de la variable array y si escribo [] es para ingresar al index/posicion del elemento
console.log(frutas[0]);//Manzana
console.log(frutas[2]);//Cereza

//metodos
//mutacioin de arrays
//push()- me agrega elementos al final del array y me retorna la nueva longitud del array
var masFrutas = frutas.push('Uvas')
console.log(frutas);
//pop() elimina el ultimo elemento que existe en el array y me retorna el elemento eliminado
var ultimo = frutas.pop('Uvas')
console.log({ frutas });
console.log({ultimo});

//unshift() agrega un nuevo elemento al array pero lo coloca en la primera posicion y me retorna la nueva longitud del array
var nuevaLongitud = frutas.unshift('Durazno')
console.log({ nuevaLongitud });
console.log({ frutas });

//shift() nos elimina el elemento que esta al inicio del array
var borrarFruta = frutas.shift('Durazno')
console.log({ frutas });
console.log({ borrarFruta });

//indexOf()- retorna la posicion del primer elemento encontrado por la caracteristica dada, si este no se encuentra retornara un -1
var posicion = frutas.indexOf('Cereza')
console.log({posicion});