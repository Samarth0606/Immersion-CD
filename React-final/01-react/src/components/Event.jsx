import React from 'react'

function Event() {

    function handleClick(){
        console.log("daba diya MAALIK")
    }


  return (
    <div>
        <button onClick={handleClick} >Dabaiye na plz!</button>
        <button onClick={()=>handleClick()} >Dabaiye na plz!</button>
    </div>
  )
}

export default Event