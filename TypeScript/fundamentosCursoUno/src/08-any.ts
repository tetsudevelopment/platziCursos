(() => {
  //el valor any significa que puedes incluir cualquier valor
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';
  //Se aconseja que el any no se debe utilizar por malas practicas

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase()
  console.log(rta);

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed()
  console.log(rta2);
})()
