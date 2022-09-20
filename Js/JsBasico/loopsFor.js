var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiante) {
  
   console.log(`Hola ${estudiante}`);
}

// loops for- ciclo for
// for (var i = 0; i < estudiantes.length; i++){
//   // console.log(estudiantes[i]);
//   saludarEstudiantes(estudiantes[i]);
// }

for (var estudiante of estudiantes){
  saludarEstudiantes(estudiante);
}