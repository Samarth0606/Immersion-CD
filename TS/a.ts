
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

// function sam(a:number , b:number){
//     console.log(a+b)
// }
// sam(10 , 20)

// --------------

// function sam(a:number , b:number) : number{
//     console.log(a+b);
//     return 10
// }
// sam(10 , 20)

// ---------------------

function sam(fn : ()=>string ):boolean{
    console.log("i am sam")
    return true
}
function b(){
    console.log("i am b");
    return "hello"
}
sam(b)







