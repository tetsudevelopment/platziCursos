// var miAuto = {
//   marca: 'Toyota',
//   modelo: 'Corolla',
//   annio: 2020,
//   //metodos de objetos
//   detalleDelAuto: function () {
//     console.log(`Auto ${this.modelo} ${this.annio}`);
//   }
// };
// console.log(miAuto.marca);
// console.log(miAuto.annio);
// console.log(miAuto.detalleDelAuto());


// //Funcion constructora

// function auto(marca,modelo,annio) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.annio = annio;
// };
// // crea un objeto que deriva de otro objeto
// var autoNuevo = new auto('Tesla', 'Model 3', 2020);
// console.log(autoNuevo);
// var autoNuevo2 = new auto('Tesla','Model X', 2018);
// console.log(autoNuevo2);
// var autoNuevo3 = new auto('Toyota', 'Corrolla', 2020)
// console.log(autoNuevo3);

// reto hacer un loop en donde se agregren nuevos autos a tu funcion contructora donde se hagan mas manual y menos constructora
//generar una funcion constructora que me cree 30 carros de forma no tan manual
var marca = [
  "Abarth",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Cadillac",
  "Caterham",
  "Chevrolet",
  "Citroen",
  "Dacia",
  "Ferrari",
  "Fiat",
  "Ford",
  "Honda",
  "Infiniti",
  "Isuzu",
  "Iveco",
  "Jaguar",
];

var modelo = [
  "C-Max",
  "Fiesta",
  "Focus",
  "Mondeo",
  "Ka",
  "S-MA",
  " B-MAX",
  "Grand C-Max",
  "Tourneo Custom",
  "Kuga",
  "Galaxy",
  "Grand Tourneo Connect",
  "Tourneo Connect",
  "EcoSport",
  "Tourneo Courier",
  "Mustang",
  "Transit Connect",
  "Edge",
  "Ka+",
];

var annio = [
  "1988",
  "1989",
  "1978",
  "1989",
  "1928",
  "1989",
  "1968",
  "1989",
  "1888",
  "1989",
  "1288",
  "1989",
  "1938",
  "1989",
  "1988",
  "1999",
  "1983",
  "1989",
  "1918",
];
var autos = [];
function newAutos(marca,modelo,annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

for (let index = 0; index < marca.length; index++) {
  var marca1 = marca[index];
  var modelo1 = modelo[index];
  var annio1 = annio[index];
  var nuevoAuto = new newAutos(marca1, modelo1, annio1);
  autos.push(nuevoAuto);
}
console.log(autos);