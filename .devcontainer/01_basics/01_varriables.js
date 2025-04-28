const accountID = 123456
let accountEmail="dashtapaswini@gmail.com"
var accountPassword = "12345"
//accountID = 2 //TypeError: Assignment to constant variable.
accountEmail = "hello@.com"
//accountState;ReferenceError: accountState is not defined
let accountState1;
accountPassword = "09876"
accountCity = "Puri"
console.log(accountID);
console.log(accountPassword);
console.log(accountEmail);
console.table([accountID, accountEmail,accountPassword,accountCity, accountState1]);
/*
prefer not to use var 
because of issue in block scope and functional scope
*/