(() => {
  const login = (data: { email: string, password: number })=>{
    console.log(data.email,data.password);
  }
  // login('barayan@email.com', '123156')
  login({
    email: 'barayan@email.com',
    password: 456123615
  });
  
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  
  const products: any[] = [];


  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }
  addProduct({
    title: 'Product 1',
    createdAt: new Date(),
    stock: 12
  });
  addProduct({
    title: 'Product 1',
    createdAt: new Date(),
    stock: 12,
    size: 'S'
  })
  console.log(products);
})()