function hola(nombre) {
  //la promesa no deja de ser una funcion asincrona
  return new Promise((resolve, reject) =>{
        setTimeout(function () {
          console.log("Hola " + nombre);
          resolve(nombre);
        }, 1500);
  });
}
function adios(nombre) {
  return new Promise((resolve, reject) =>{
    setTimeout(function () {
      console.log("Adios " + nombre);
      resolve();
    }, 1000);
  })
  
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla, bla bla bla...");
      // resolve('marin')
      reject('Hay un error');
    }, 1000);  
  })
}

//..
console.log('Iniciando el proceso...');
hola("Brayan")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(function (nombre) {
    console.log("Terminar proceso...");
  })
  .catch(error => {
    console.error('Hay un error grave');
    console.error(error);
  })
