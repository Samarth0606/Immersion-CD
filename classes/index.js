// function Person(){
//     this.naam = "sam";
//     this.age =100;
//     this.isMale = true;
//     this.fn = function(){
//         console.log("hello bhai")
//     }
// }

// class Person{
//     constructor(naam , umar , gender){
//         this.naam = naam;
//         this.age = umar;
//         this.isMale = gender;
//     }
//     fn(){
//         console.log("hello bhai")
//     }
// }
// let obj1 = new Person("kashish" , 29 , true);
// let obj2 = new Person("maverick" , 2 , true);

// --------------------------

class Bacche{
    constructor(naam , roll){
        this.name = naam;
        this.roll = roll;
    }
    greet(){
        return `hello from ${this.name}`
    }
}
class Student extends Bacche{
    constructor(name , roll , email){
        super(name , roll)
        // super(roll ,name) ❌
        this.email = email;
    }
    greet(){
        console.log(`bye bye ${this.name}`)
    }
}

let obj1 = new Student("rahul" , 420 , "r@gmail.com")
let obj2 = new Student("vinnet" , 404 , "v@gmail.com")









