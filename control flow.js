// condition statement

// if statement
let age=18;
if (age >= 18){
    console.log("You're an adult")
}
// if else statement
let Name="Maaz";
if (Name == "Huzaifa"){
    console.log("Hello, Welcome " +Name);
}else{
    console.log("Invalid Name");
}
//else if  statement
let Name1="Maaz";
if (Name1 == "Huzaifa"){
    console.log("Hello, Welcome " +Name1);
}
else if( Name1 == "Maaz"){
    console.log("Welcome "+ Name1);
}
else {
    console.log("Invalid Name");
}

// switch statement 
let value=[];
switch (typeof value) {
    case "number":
        console.log("This is Number");
        break;
    case "string":
        console.log("This is String");
        break;
    case "boolean":
        console.log("This is Boolean");
        break;

    default:
        console.log("other");
        break;
}


// ternary operator

// condition ? Value_if_true : Value_if_false

let age_value=40;
let msg=(age_value>=18) ? "You're an adult" : "you're an Child"
console.log(msg);
