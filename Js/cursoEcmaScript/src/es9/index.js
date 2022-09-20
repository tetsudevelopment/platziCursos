//Párametro rest-resto
const obj = {
  name: 'Brayan',
  age: 19,
  country:'COL',
}
let { country, ...all } = obj;
console.log( all);
//Propiedad de propagacion
const obj2 = {
  name: 'Oscar',
  age:32,
}
const obj1 = {
  ...obj2,
  country:'MX',
}
console.log(obj1);

//metodo FInally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(()=>resolve('Hello World'),3000)
      : reject(new Error('Test Error'))
  })
};
helloWorld()
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log('Finalizo'))


//Expresiones regulares
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
