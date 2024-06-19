// direct calling => window
// function sam(){
//     console.log(this);
// }

// sam();

// ----------
// object calling =>  objectn in which this method is defined
// let obj = {
//     a: 10,
//     b: 20,
//     c: function(){
//         console.log(this);
//     }
// }

// obj.c() //obj

// -----------------------------

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this)
//     }
// }

// let ans = obj.fn;
// ans()


// ----------------------

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this) //obj , window
//         function b(){
//             console.log(this) //window
//         }
//         b()
//     }
// }

// // obj.fn();
// let ans = obj.fn;
// ans()

// ----------------


// function Sam(){
//     this.naam = "baba bangali"
// }
// let obj = new Sam()
// console.log(obj)

// -----------------
// indirect calling => call , apply , bind
// -> change the reference of ``this`` keyword

// let obj1 ={
//     a: 20,
//     fn: function(a,b,c){
//         console.log(this,a,b,c)
//     }
// }
// let obj2 = {
//     a:50
// }

// let newFn = obj1.fn.bind("sam") //copy create
// newFn()


// ---------
// obj1.fn() 
// obj1.fn.call(obj2,10,20,30) 
// obj1.fn.apply(obj2,[10,20,30]) 


// ------
// obj1.fn() //obj1
// obj2.fn() //erroor


// -------------------------

let obj = {
    a:10,
    b:20,
    fn: function(){
        let sam = ()=>{
            console.log(this) //
        } 
        sam()
    }
}
obj.fn()

// let obj2 = {
//     a:10,
//     b:20,
//     fn: function(){
//         console.log(this) //obj
//     }
// }
// obj2.fn()

