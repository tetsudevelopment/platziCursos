function newFunction(name, age, country) {
  var name = name || 'Brayan';
  var age = age || 19;
  var country = country || 'COL';
  console.log(name,age,country)
}
 
//es6
function newFunction2(name = 'Brayan', age = 19, country = 'COL') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Esteban', '20', 'MX');

//Template literals
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

//Multilinea
let lorem = 'lorem para ver el multilinea\n'
  + 'Otra drase epica que necesitamos.'

let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica`
console.log(lorem);
console.log(lorem2);
  
//Destructuracion de elementos

let person = {
  name: 'Brayan',
  age: 32,
  country:'COL'
}
console.log(person.name, person.age, person.country);
let { age} = person;
console.log(age);

//operador de propagacion
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2]
console.log(education);

{
  var globalVar = 'Global';
}
{
  let globalLet = 'Global let';
  console.log(globalLet);
}
console.log(globalVar);
// console.log(globalLet);

let a = 'b';
console.log(a);
a = 'e';
console.log(a);
//parametros de objetos
//es5
let name = 'Oscar';
let age = 32;
obj = { name: name, age: age };
//es5
obj2 = { name, age };
console.log(obj2);

//Arrow functions
const names = [
  { name: 'Oscar', age: 32 },
  {name:'Brayan', age:25},
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name))

const listOfNames3 = (name, age, country) => {
  ...
}

const listOfNames4 = name => {
  ...
}

const square = num => num * num;


//Promesas para trabajar el Asincronismo
const helloPromise = () => {
  //Necesita dos elementos resolve o reject
  return new Promise((resolve,reject) => {
    if (null) {
      resolve('Hey!!');

    } else {
      reject('Upsss!!');
    }
  })
}

helloPromise()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

//Clases 
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return valueA + valueB;
  }
}
const calc = new calculator();
console.log(calc.sum(2,5));

//Módulos
import  hello  from './app'
hello();
import { hello } from "./app";
hello();

//Generadores 
function* helloWorld() {
  if (true) {
    yield 'Hello';
  }
  if (true) {
    yield 'World';
  }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);