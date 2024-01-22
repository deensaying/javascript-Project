// Function Function_Name(Parameter){
//     any code;
// }
// Function_Name(Arguement);


// Parameter and arguement

// function Greet(FirstName,LastName){
//     console.log("Hello,"+" Ana "+FirstName+" bin "+LastName);
// }
// Greet("Huzaifa","Shamim");


// function Greet(FirstName,MiddleName,LastName){
//     console.log("Hello,"+" Ana "+FirstName+" bin "+MiddleName+" bin "+LastName);
// }
// Greet("Huzaifa","Shamim","Ahmad");

// default parameter

// function sum(x, y){
//     console.log(x*y);//because y undefined hai
// }

// sum(10);

// function sum(x, y){
//     console.log(x*y);
// }

// sum(10,15);
// function sum(x, y=0){
//     console.log(x+y);
// }

// sum(10);

// return function

// function add(a,b){
//     return a+b;
//     a*b;// this will not execute bcoz we havent used return sentence
// }
// let result =add(29,1);
// console.log(result);

function fn1(x){
    function fn2(y){
        return x+y;
    }
    return fn2;
}
let result =fn1(6);
console.log(result);
//This will show me function fn2

console.log(result(3));//This will give me my function valuee