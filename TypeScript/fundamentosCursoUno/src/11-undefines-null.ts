(() => {
  //esto esta mal
  // let myNumber: number = undefined;
  // let myString: string = null;

  //Como sera de tipo any
  // let myNull = null;
  // let myUndefined = undefined;

  //forzar el tipado
  let myNull : null=null;
  let myUndefined: undefined = undefined;

  //inicializar una variables en null o undefined pero teniendo un tipo de dato especifico
  let myNumber: number | null = null;
  myNumber = 50;

  let myString: string | undefined = undefined;
  myString = "Hola TypeScript";


  function hi(name:string|null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;

    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV2('Nicolas');
  hiV2(null);
})();
