//metodo flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat());

//metodo flatMap
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value * 2]));


//eliminar los espacios en blanco de un string

let hello ='       Hello World    '

console.log(hello);
//método trimStart
console.log(hello.trimStart());

//método trimEnd
console.log(hello.trimEnd());
 
//método trim
console.log(hello.trim());


//parámetro opcional del catch
try {
  
} catch {
  error
}


// método entries trasformar de arreglos a objetos
let entries = [['name', 'Oscar'], ['age', 32]];

let obj = {
  name: 'Brayan ',
  age: 19,
}
//objetos a arrays
console.log(Object.entries(obj));
//array a objetos
console.log(Object.fromEntries(entries));

// Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);