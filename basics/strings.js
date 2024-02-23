//sttrings
//strings can be denoted by '' or ""
console.log("muni"+"naga")//concatenation

//string interpolation
console.log(`hello my name is ${"muni"} and my repo is ${"muninaga"}`)

const str=new String("muni")

console.log(typeof str)
//methods of string
console.log(str.length)//length
console.log(str.toUpperCase())
console.log(str.charAt(2))//chatAt
console.log(str.indexOf('u'))

//substirng
console.log(str.substring(0,2))
//slice
console.log(str.slice(0,2))
//trim
const v="  muni   "
console.log(v.trim())//remove spaces

//replace
v.replace('m','v')
console.log(v)
//includes 
console.log(v.includes('muni1'))
//split



