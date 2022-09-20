(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('ProductPrice', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;

  console.log('customerAge', customerAge);

  let productInShock: number;

  console.log('productInShock', productInShock);

  if (productInShock>10) {
    console.log('is greater');
  }

  let discount = parseInt('100');
  console.log('discount',discount);
  if (discount <=200) {
    console.log('apply')
  } else {
    console.log('Not apply');
  }
  // valor hexadecimal
  let hex = 0xfff;
  console.log('hex',hex);

  // valor binario
  let bin = 0b1010;
  console.log('bin', bin);

  const myNumber: number = 10;

})();
