// var nombre = 'Brayan'; // var es una palabra reservada

// //declarar
// var edad;
// edad //undefined- vacio

// //inicializar
// edad = 30;

// edad //number-30

// var elementos = ['Computadoras', 'Celular'];

// var persona={
//   nombre: 'Brayan',
//   edad:19,
// }
// console.log(persona);
// persona;


var objects=[{
  parte1:{name:'Object 1'},
  parte2:{name:'object 2'},
}]



dataEmpleados = [
  {
    idPedido: 1,
    contenido: [
      { name: "Prueba 1" }
    ],
  },
  {
    idPedido: 2,
    contenido: [
      { name: "Prueba 2.1" },
      { name: "Prueba 2.2" },
      { name: "Prueba 2.3" },],
  },
];
dataEmpleados.forEach(element => {
  console.log(element.contenido.name);
});
