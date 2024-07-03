// function Sam(){

// }
// console.log(new Sam());
// ----
// function sam(){

// }
// console.log(sam());
// ----

// async function sam(){
//     return 10
// }
// console.log(sam())
// -------

// function sam(){
//     console.log("sam-1");
//     setTimeout(function(){
//         console.log("sam-2")
//     } , 0)
//     console.log("sam-3");
// }
// sam()

//fetch => returns a promise , web api , partial/meta data

// async function sam(){
//     console.log("sam-1");
//     let data = await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     let resp = await data.json();
//     console.log("resp")
//     console.log(resp)
// }
// function sam2(){
//     console.log("a")
//     console.log("b")
// }

// sam()
// sam2()

// ---------------------------


//axios => promise

async function sam(){
    let data = await axios.get('https://api.tvmaze.com/search/shows?q=girls')
    console.log(data)
}
sam()
