const number=[1,2,3,4,5]
const numsqr= number.map((num)=>num*num)

console.log(numsqr)

let sum = 0;
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(num1 => console.log(num1))
console.log(sum)

//filter
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  const countriescontainingland =countries.filter((country)=>country.includes('land'))
  console.log(countriescontainingland)

