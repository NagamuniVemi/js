//FUNCTIONS

function name()
{
    console.log("naga")
}
//name()
function add(number1,num2)
    {
        return number1+num2
    }
console.log(add(10,20))


//rest
function add(...num1)
{
    return num1
}
const int=add(1,2,3,4)
console.log(int)



function add1(var1,var2,...num1)
{
    return num1
}
const int1=add1(1,2,3,4)
console.log(int1)



//object as argument


const jsuser={
    name:"muni",
    age:18,
    location:"kadapa",
    email:"nagamunirdeddyofficial@gmail.com"
}

function object(objectarg)
{
    return `object value ka user ka nam: ${objectarg.name}`
}

const name1=object(jsuser)
console.log(name1)