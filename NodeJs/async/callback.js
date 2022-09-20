function hola(nombre,miCallback) {
  // console.log('Hola soy una funcion asincronica');
  setTimeout(function() {
    console.log('Hola '+nombre);
    miCallback(nombre);
  },1500)
};
function adios(nombre,apellido, otroCallback) {
  setTimeout(function () {
    console.log('Adios ' + nombre);
    otroCallback(apellido);
  },1000);  
};
console.log('Iniciando proceso...');


hola('Brayan ',function (nombre) {
    adios(nombre,'Marin',function (apellido) {
        console.log('Termiando proceso...'+nombre+ apellido);
      },
    );
  },
);  
// hola('Brayan', function () { });
// adios('Brayan', function () { });
