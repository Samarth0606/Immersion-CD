
// var a = 10;  //global
// let b = 100; //script
// const c = 20;

// const c = "sam" //redeclare
// a=300; //reinitialize

                    //var     //let    // const
//     redeclare=> ✅          ❌         ❌
// reinitialize => ✅          ✅         ❌


// console.log(a) // und
// console.log(b) //err
// console.log(c) //
// var a = 10;
// let b = 10;
// const c = 10;


// const c; 
// c = "sa";
// console.log(c)

// ---------------------------

// var a =10; // global
// if(true){
//     console.log(a) //10
//     var a = 200; // global
// }
// console.log(a) // 200
// ---------------------------

// var a =10; //global
// function sam(){
//     console.log(a) //undef
//     var a = 200;
//     console.log(a) //200
// }
// sam()
// console.log(a) //10  , 200

// ------------------------
// let a = 10; //script
// sam();
// function sam(){
//     console.log(a) //err
//     let a = 200; //block
//     console.log(a) //200
// }
// console.log(a) //10 , 200

// // ----------------------------
// let a = 10; 
// sam();
// function sam(){
//     console.log(a) //undef 
//     var a = 200; 
//     console.log(a) //200
// }
// console.log(a) //10


// // ----------------------------
// let a = 10; 
// sam();
// if(true){
//     console.log(a) 
//     var a = 200; //global
//     console.log(a) 
// }
// console.log(a) 

// ---------------------

// ----------------------------
// let a = 10; 
// a = 300
// if(true){
//     console.log(a) //300 , err
//     a = 200
//     console.log(a) //200 ,  , 
// }
// console.log(a) //200 , 300 ,  , 