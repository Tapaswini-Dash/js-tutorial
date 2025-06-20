 
 let str = `hello`
 let age= 19
 let name = "Sneha"
 let name1= "Dash"
 console.log(`Hello , my name is ${name} and my age is ${age}`); //*****
 //!string inbuilt methods
 //?toUpperCase()
 //?toLowerCase()
 //strings are immutable so any changes will be displayed in the copy of the og string
 //trim()==> starting and ending spaces will be removed
 let str1 = " today is a working day we "
 let index = str1.indexOf("all");
 console.log(index);
 let lastindex= str.lastIndexOf("working")
 console.log(lastindex);
 let char=str.charAt(2)
 console.log(char);
let char1=str.charAt(10)
 console.log(char1);
let replace=str.replace("is","are")
 console.log(replace);
 let replaceall= str.replaceAll("we","all");
 console.log(replaceall);
  let slice= str1.slice(2,5);
 console.log(slice);
  let split= str1.split(""); // return karta hai array type based on some condition
 console.log(split);
 
let split1= str1.split("is"); // return karta hai array type based on some condition
 console.log(split1);

let length= str1.length;
 console.log(length);
   // Function 
   //user defined function
   // normal function ==> both function name and function keyword
   function greet()
   {
    console.log("Hello");
   }
   greet()
   function greeteveryone(str)
   {
    console.log("str");
   }
   greeteveryone ("Hello everyone")
   

   //arrow function ==. jisme function keyword nahi hai
   const sum = (a,b) => {
    console.log (a + b);
   }
   sum (10, 20)
   
   const detail = (name , age ) => 
   {
    console.log ( name , age);
   }
   detail ("Sneha" , 19);
 // Anonymous Function ==> jiska function hin nahi hai
const multiply = function (a,b)
{
    console.log(a*b);
}
multiply(10,10)

//CALLBACK FUNCTION ==> pass as an argument to another function
//(a,b) => {
   // console.log (a + b);
   //} // ==> this much part of arrow function is the call back function 
   //() => {

   //}
   //? for forEach loop ==> only array mein use hota hai index ke base par   
let arr =[10 , 20 , 30 , 40 , 50 , 6 , 60 ]
arr.forEach((element) => { // accumulator i.e first value 10 store hoga
    console.log(element);})


let obj = {
    name: "Amit",
    age: 20,
    course: "MERN",
    address: "Bhubaneswar"
}
for (let key in obj) {
     console.log(key);
     console.log(obj[key]);
}


let marks = [90, 80, 85, 92, 88, 94, 95]
console.log(marks);
//! push()
 //marks.push(90, 60, 70) // last se add hoga
 //console.log(marks);

//! pop() // last element del hoga
 //marks.pop()
 //console.log(marks);

 //! unshift()
 //marks.unshift("Hello", "Hii") // age se add hoga
 //console.log(marks);

//! shift()
 //marks.shift()
//console.log(marks);// age se del hoga 

//marks.shift()
//console.log(marks);// age se del hoga 

//! splice()
 //marks.splice(2, 2) //delete // here stating 2 means from second index then after comma what is written it can be 0 , 1 , 2 then if 2 then 2nd index choosen is one then the next adh=jacent index is two so they both will be removed.
 //console.log(marks);


  //marks.splice(2, 2, "Hi", true) //replace
 //console.log(marks); // here as above mentioned process in slice will occur then we can replace that removed element spaces with this way

 //marks.splice(4, 0, undefined, false) // keyword can be written without string // same replacement
//console.log(marks);

//! slice()
//let subArr = marks.slice(2, 6)
//console.log(subArr); // doubt


//! reverse()
/*marks.reverse()
console.log(marks);
console.log(marks.reverse());


//! includes()
 /*console.log(marks.includes(10));
 console.log(marks.includes(90));

 //! toString()
//console.log(marks.toString());*/
for (let element of arr) {
     console.log(element);
}

let arr4 = [10, 20, 30, 4, 50, 6, 60]
let newArr = arr4.forEach((element) => {
    console.log(element);
    return element * 2
})
console.log(newArr);