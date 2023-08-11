// const number=[1,2,3,4,5]
// const numsqr= number.map((num)=>num*num)

// console.log(numsqr)

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach(num1 => console.log(num1))
// console.log(sum)

// //filter
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]
//   const countriescontainingland =countries.filter((country)=>country.includes('land'))
//   console.log(countriescontainingland)


  let arr=[6,0,34,3,54,44,90,65,45,5]

//maping
  let a1=arr.map((a)=>{
 return a+1
  })

//filter
  let a2=arr.filter((b)=>{
    return b<50
  })

  //reduce
arr1=[10,20,30,40,50]

let c=arr1.reduce((h1,h2)=>{
  return h1+h2
})
  console.log(arr)
  console.log(a1)
  console.log(a2)
  console.log(c)

