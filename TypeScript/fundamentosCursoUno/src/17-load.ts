import _ from 'lodash'

const data = [
  {
    username: 'Brayan',
    role: 'student'
  },
  {
    username: 'Andres',
    role: 'customer'
  },
  {
    username: 'Andres',
    role: 'customer'
  },
  {
    username: 'Andres',
    role: 'customer'
  },
  {
    username: 'Edwin',
    role: 'admin'
  }
]
const rta=_.groupBy(data, (item) => item.role);
console.log(rta);
const rta1 = 1 + '1';
console.log(rta1);