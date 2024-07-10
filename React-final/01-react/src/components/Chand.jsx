import React, { useState } from 'react'

function Chand() {
    let [val , setVal] = useState(0)
    function handleIncrement(){
        console.log(val ,'1')
        // setVal(val+1) //prev vaklue hold nhi karta hai
        // setVal(val+1) 
        setVal((val)=>val+1) //prev value hold krta hai
        setVal((val)=>val+1) 
        console.log(val , '2')
    }
  return (
    <div>
        <button onClick={handleIncrement} >Increment : {val} </button>
    </div>
  )
}

export default Chand