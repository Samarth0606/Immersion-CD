"use strict";
// inference
// let a = 10;
// a = 1000;
// ---------------
// let a:number = 10;
// a = 1000;
// let b:string = "sam";
// b = "smamsma"
// -------------------
// tuples
// let tup:[string , string , number] = ["sam" , "vohra" , 10 , 30]
// let tup:[string , string , number] = ["sam" ,10 ,  "vohra"]
// let tup:[string , string , number] = ["sam",  "vohra" , 10]
// let arr:number[] = [10,20,30,40]
// let arr2:string[] = ["10","20","30","40"]
// -------------------
// any ❌ -> unknwown ✅
function sam(a, b) {
    console.log(a + b);
}
sam(10, 20);
