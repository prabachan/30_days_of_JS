//destructuring array

const numbers=[1,2,3]
let[n1,n2,n3]=numbers
console.log(n1,n2 ,n3)

//destructuring object

const rectange={
    height:20,
    length:30,
    area:50
}
 let{ length, height, area, perimeter}=rectange

 console.log(
    length, height, area, perimeter
 )
 let {
    length:l, height:h , area:a, perimeter:p}=rectange
 console.log(l,h,a,p)

 //spread

 const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numsx=[...nums1]

 const nums2 = [11,12,13,14,15]
 let numsy=[...nums2]

 const naturalnumber=[...nums1, ...nums2]
 console.log(naturalnumber)