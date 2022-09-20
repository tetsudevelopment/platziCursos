var articulos = [
  { name: "Bicicleta", costo: 3000 },
  { name: "Television", costo: 2500 },
  { name: "Libro", costo: 320 },
  { name: "celular", costo: 10000 },
  { name: "Laptop", costo: 2000 },
  { name: "Laptop", costo: 20000 },
  { name: "Teclado", costo: 500 },
  { name: "Audifonos", costo: 1700 },
];
// metodo filter- el metodo filter genera un nuevo array, 
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});
// console.log(articulosFiltrados);
//metodo map()- me ayudara a mapear ciertos articulos y me creara un nuevo array, no me modifica el array que tengo

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.name
})
// console.log(nombreArticulos);
// find() hace una busqueda en nuestro array y a la primera coincidencia deja de realizar dicha busqueda
var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.name === 'Laptop';
})
// console.log(encuentraArticulo);
//forEach()- no me genera nuevo arrays, solo va a hacer el filtrado sobre el array sin modificarlo y retornara los elementos filtrados
articulos.forEach(function (articulo) {
  // console.log(articulo.name);
})
// metodo some() se genera un nuevo array pero solo te arroja true o false para saber la existencia del articulo que deseas buscar
var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
})
// console.log(articulosBaratos);
