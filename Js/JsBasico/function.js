// Hay dos tipos de funciones

// declarativas son funciones que se declaran
function miFuncion() {
  return 3;
};
miFuncion();
// Expresión son funciones expresivas - tambien conocidas como funciones anonimas
var miFuncion = function (a, b) {
  return a + b;
};

//llamando una funcion expresiva
miFuncion();

// scope
// el scope es lo que se crea al momento que creamos un archivo .js existen dos tipos Scope Global y Scope Local el Scope global es todo el archivo en el cual nosotros podemos ingresar a las varibales desde cualquier lado o momento pero el Scope local es un mundo que se crea dentro del Scope global, y este puede llamar los datos del Scope global pero el Scope global no puede llamar las variables del Scope local