// var a = 10;
// console.log(a)  //hoisting ❌

// // ---------------
// //type-1 -> var -> undefined
// console.log(b) //hoisting ✅
// var b = 10;


// ---------------
//type-2 -> let & const -> error
// console.log(b) //hoisting ✅ => DTZ
// let b = 10;

// -----------------


// var d = 10;
// console.log(d);

// function sam(){
//     console.log("hello")
// }
// sam()
// ------------------

// console.log(a) //undef
// var a = 100;
// if(true){
//     console.log(a) // 100 , error , 100
//     let a = 100;
// }
// console.log(a) //100 ,  , err
