import { addProduct,calcStock,products} from './product.service'

addProduct({
  name: 'Product 1',
  createdAt: new Date(),
  stock: 12
});
addProduct({
  name: 'Product 2',
  createdAt: new Date(),
  stock: 12,
  size: 'S'
})

console.log(products);
const total = calcStock();
console.log(total);
