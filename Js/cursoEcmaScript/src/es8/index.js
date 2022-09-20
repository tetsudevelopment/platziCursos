

//trasformacion de arrays a objetos y trailing commas
const data = {
  frontend: 'Brayan',
  backend: 'Ramon',
  desing:'Ana',
}


const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
//Me muestra los valores de un objeto
const values = Object.values(data);
console.log(values);

//me muestra las llaves de un objeto
const keyss = Object.keys(data);
console.log(keyss);


//Padding
const string = 'Hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-'));
console.log('Food'.padEnd(12, '----'));

//trailing commas
const obj = {
  name:'Brayan',
}

//Async Await

const helloWorld = () => {
  return new Promise((resolve,reject) => {
    (false)
      ? setTimeout(() => resolve('Helloo World'), 5000) 
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
anotherFunction();