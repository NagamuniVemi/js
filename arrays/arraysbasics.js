//arrays
//multiple datatypes
const naga=[1,2,3,3]
const muni=new Array(1,2,3,4)
//arraymethods

muni.push(naga)//addvalues
console.log(muni)

console.log(muni.length)//length
console.log(muni.pop())//pop last element


//unshift
muni.unshift(1)
console.log(muni)//shift the remaining elements
muni.shift()
console.log(muni)
//join -> it makes the arrays to string with those values


//slice->not includes range and doesnot change the array 
// splice ->it includes  range value and it brought that values out of array and chages the array


//concat
const all=naga.concat(muni)
console.log(all)


//spread
const all1=[...naga,...muni]
console.log(all1)

//flaten  ->converts the nested array to the normal array



console.log(Array.isArray(muni))

//from ->converts the iterable to array

console.log(Array.from(muni))



//of
const arr1=Array.of(10,202,30)
console.log(arr1)