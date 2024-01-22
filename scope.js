// Scope are of 3 type 
// 1. global Scope
// global scope means variable kahin bhi defined ho... lekin vo use hoga kahin bhi (function k andar ha jagah)

// let MyName="Huzaifa shamim";
// function example(){
//     console.log(MyName);
// }
// example(); ///function recall
// console.log(MyName);

// 2. function Scope
// function k  andar define hoga variable to hi apply hoga
// function Fscope(){
//     const FatherName= "Mohammmad Shamim Ahmad";
//     console.log(FatherName);
// }
// Fscope();


// 3. block scope
// ek block of element me hi ye code execute karega...means jo hamara variable hoga vo us block me define hona chahiye
// function Bscope(){
//     if(true){
//         let MotherName="Rahat aara";
//         console.log(MotherName);
//     }
//     console.log(MotherName);///yahan error dega bcoz block k bahar hai
// }
// Bscope();
