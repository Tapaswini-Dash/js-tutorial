//#Primitive

// 7 types :- String , Number , Boolean , Null, Undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3


const isloggedin = false
const outsidetemp = null
let useremail ; // manually also we acn write it as undefined or if not then by default the output will be undefined.

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id);
console.log(anotherid);
console.log(id===anotherid);
const bignumber = 34567788899999n // after adding n to the last of it it will be a bigint now.
//Reference (Non Primitive)

//Array, Objects, Functions
const heros =[ "shaktiman","naagraj","doga"] // array
let myObj = {
    name : "sneha",
    age : 22,

} // anything inside the curly braces is considered as  object.
// it can contain any data types or another object inside it also.
 

const myfunction = function  () {
    console.log("Hello World");
}

console.log(typeof bignumber);
console.log(typeof myfunction);
// jitne bhi non-primitive daytype hain unka typeof datatype function hota hai 
// awur jab function ka return type dekh te hain toh woh object function hota hai...
//https://262.ecma-interantional.org/5.1/#sec-11.4.3