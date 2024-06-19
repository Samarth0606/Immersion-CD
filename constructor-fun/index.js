// constructor => create objects
// function sam(){

// }

// sam() //generic
// new sam() //constructor
// --------------------------

function Kash(name , age , prof){
    this.naam = name;
    this.age = age;
    this.profession = prof;
    // this.greet = function(){
    //     console.log(`hello from ${this.naam}`)
    // }
}

Kash.prototype.greet = function(){
    console.log(`hello from ${this.naam}`)
}
let obj1 = new Kash("samarth" , 100 , "teacher");
let obj2 = new Kash("maverick" , 2 , "bhau bhau");
console.log(obj1 , obj2)



