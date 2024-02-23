//freeze  ->the frezes the value and the manipulations not reflected afer this
const jsuser={
    name:"muni",
    age:18,
    location:"kadapa",
    email:"nagamunirdeddyofficial@gmail.com"
}
const jsuser1={
    name:"muni",
    age:18,
    location:"kadapa",
    email:"nagamunirdeddyofficial@gmail.com"
}
// Object.freeze(jsuser)
// jsuser.name="naga"
// console.log(jsuser)



jsuser.greeting=function()
{
    console.log("helloeveryone")
}
console.log(jsuser.greeting())

//object.assign
const Obj=Object.assign(jsuser,jsuser1)
console.log(Obj)


//
const users=
[
    {
        id:1,
        email:"muni@gmail.com"
    },

    {

    }
]
//keys
console.log(Object.keys(jsuser))

//values
console.log(Object.values(jsuser))

//entries
console.log(Object.entries(jsuser))

//hasOwnProperty  ->it checks the value of a of key is present in a datatype
console.log(jsuser.hasOwnProperty('name'))
