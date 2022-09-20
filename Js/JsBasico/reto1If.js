//Hacer un juego de piedra, papel o tijera.
// generar variables piedra, papel o tijera.
// crear un funcion llamar la funcion con el parametro que vas a jugar 
// llamar en la funcion si mi variable de PPT le gana a la variable de PPT de la maquina.


var piedra = 'Piedra';
var tijera = 'Tijera';
var papel = 'Papel';

function juego(user,gpu) {
  if (gpu === user) {
    console.log(`User: ${user}  GPU ${gpu} Ambos tiene el mismo objeto es un empate`);
  } else if (user === "Piedra" && gpu === "Tijera") {
    console.log(`User: ${user}  GPU ${gpu} Ganador Usuario`);
  } else if (user === "Tijera" && gpu === "Papel") {
    console.log(`User: ${user}  GPU ${gpu} Ganador Usuario`);
  } else if (user === "Papel" && gpu === "Piedra") {
    console.log(`User: ${user}  GPU ${gpu} Ganador Usuario`);
  } else {
    console.log(`User: ${user}  GPU ${gpu} Ganador GPU`);
  }
}
juego('Piedra',piedra)
