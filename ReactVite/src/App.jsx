// component -> functions

function App(){
  
  let a = "sam";
  let b = 10;
  let c = true;
  let d = false;
  let e = null;
  let f = undefined;

  return(
    <div>
      <h1>a:{a} </h1>
      <h1>b:{b} </h1>
      <h1>c:{JSON.stringify(c)} </h1>
      <h1>d:{JSON.stringify(d)} </h1>
      <h1>e:{JSON.stringify(e)} </h1>
      <h1>f:{JSON.stringify(f)} </h1>
    </div>
  )
}


export default App