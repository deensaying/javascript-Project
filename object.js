//! Syntax of object
//? variable Object_Name ={
//? key:value 
//?  }

const student ={
    Name: "Huzaifa",
    "FatherName": "Mohammad Shamim Ahmad",
    MotherName: "Rahat aara",
    Age:19,
    Address:{
        FlatNo: 503,
        Building:"Apna Ghar",
        Area:"Mahada",
        location:"Malwani",
        City:"Malad(W)",
        State:"Maharashtra",
        Country:"India",
        PinCode:400095

    }
}
console.log(student["FatherName"]);

for(let prop in student){
    console.log(prop+":"+student[prop]);
}

//! how to update in object?
//? variable.Key=value;

//! how to delete in object?
//? delete variable.key;

//! how to check if property exist in Object
//? console.log("key" in variable);