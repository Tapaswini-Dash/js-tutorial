let score = 33

console.log(typeof score);
console.log (typeof(score));


let score1 = "33abc"

console.log(typeof score1);
console.log (typeof(score1));
let valueInNumber = Number(score1)
console.log(typeof valueInNumber); // NaN ==> not a no.
//let valueInNumber = String(score1)
//console.log(typeof valueInNumber);
console.log(valueInNumber);
  // "33" ==> 33
  //"33abc" ==> NaN
  //true==> 1; false ==>0 

  let isloggedin = 1

  let booleanIsLoggedIn = Boolean(isloggedin)
  console.log(booleanIsLoggedIn);
  // 1==> true; 0==> false
  //"" ==> false
  // "sneha"==> true

  let score2= 12
  let valueInNumber1 = String(score2)
  console.log(typeof valueInNumber1);
  console.log(valueInNumber1);

  //console.log(2+2);
   //console.log(2-2);
    //console.log(2*2);
     //console.log(2**2);
      //console.log(2/2);
       //console.log(2%2);

       let str1 = "hello"
       let str2 = " Sneha"

       let str3 = str1 + str2
       console.log(str3);

       console.log("1"+2);//12
       console.log(1+"2");//12
       console.log("1"+"2");//12
       console.log("1"+2+2);// 122 as first here is string
       console.log(1+2+"2"); // 32 as first addition then string in this case
       console.log(3+4*5%3);


       console.log(2>1);
       console.log(2>=1);
       console.log(2<1);
       console.log(2==1);
       console.log(2!=1);


       console.log("2">1); // true as it converts string to no.
       console.log("02">1);
       console.log(null>=0);
       console.log(null>0);
       console.log(null==0);

       console.log(undefined==0);
       console.log(undefined>=0);
       console.log(undefined<0);


       console.log("2"===2);
