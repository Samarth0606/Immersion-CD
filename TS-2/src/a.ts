// function sam(){
//     asmd MediaKeyStatusMap
// }

// let arr = (a:number,b:number)=>{
//     return a+b
// }
// arr(5,6)

// ----------------------------

// let user = {
//     name: "samarth",
//     age:10,
//     password:12345,
//     email:"sam@gmail.com",
//     // isMale:true
// }
// interface User{
//     name:string,
//     age:number,
//     password:number,
//     email:string,
//     isMale?:boolean
// }

// function isAdult(user:User){
//     if(user.age>=18){return true}else{return false}
// }
// console.log(isAdult(user))

// ------------------------------------
// interface X{
//     name:string,
//     age:number
// }
// interface Y extends X{
//     greet(phrase:string):void
// }
// // class Person extends Sam{}
// class Sam implements Y{
//     name:string;
//     age:number;
//     constructor(naam:string , umar:number){
//         this.name = naam;
//         this.age = umar;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.name}`)
//     }
// }
// let p1 = new Sam('sam' , 1)
// p1.greet('namaste')
// console.log(p1)

// ------------------------------------
//type
//union (or) , intersection (and)
// interface union ❌ & intersection ✅ (extends)
// interface User{
//     name:string
// }
// type Sam = string;


// type DSA = {
//    teach : string,
//    question:number
// }
// type WEB = {
//     project:number
// }

// interface Final extends Y{} //intersection only (union nhi possible)
// type Final = DSA & WEB; //intersection
// type Final2 = DSA | WEB; //union

// -----------------

// interface DSA{
//     teach : string,
//     question:number
//  }
// type WEB = DSA & {
//     project:number
// }

// ------

// type DSA = {
//     teach : string,
//     question:number
//  }
// interface WEB extends DSA {
//     project:number
// }

// -------------------------------
// type X = {
//     name:string,
//     age:number
// }
// type Y = X & {
//     greet(phrase:string):void
// }

// class Sam implements Y{
//     name:string;
//     age:number;
//     constructor(naam:string , umar:number){
//         this.name = naam;
//         this.age = umar;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} from ${this.name}`)
//     }
// }
// let p1 = new Sam('sam' , 1)
// p1.greet('namaste')
// console.log(p1)

// -----------------------

