
var numero = 1000 ;

switch (numero) {
  case 1:
    console.log('Soy el caso uno');
    //el break se debe usar para que la funcion pare y no siga procesando mas casos ya que la funcion si se cumplio
    // si no colocamos el break en cada validacion seguira validando los demas casos por eso es importante usar el break
    break;
  case 10:
    console.log('Soy un Diez');
    break;
  case 100:
    console.log('Soy un cien');
    break;
  default:
    console.log('No soy nada');
}
