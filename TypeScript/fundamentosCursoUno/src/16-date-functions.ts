import { subDays, format } from 'date-fns';

const date = new Date(1998, 5, 28) //0- enero 1-febrero
const rta= subDays(date, 60)
const str = format(rta,'yyyy/MM/dd')
console.log(str)