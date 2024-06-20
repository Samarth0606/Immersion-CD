// let btn = document.querySelector('button');

// let shout = function(){console.log("shout")}
// let scream = function(){console.log("scream")}

// btn.onclick = shout;
// btn.onclick = scream;

// ---------

// btn.addEventListener('click' ,shout)
// btn.addEventListener('click' ,scream)

// -----------------------

let gp = document.querySelector('#gp')
let p = document.querySelector('#p')
let c = document.querySelector('#c')

gp.addEventListener('click' , function(){console.log("gp")} ,true )
p.addEventListener('click' , function(){console.log("p")} ,false )
c.addEventListener('click' , function(e){
    console.log("c")
    e.stopPropagation()
} ,true)