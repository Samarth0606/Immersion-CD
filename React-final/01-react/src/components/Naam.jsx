import React, { useState } from 'react'

function Naam(props) {
    // let naam = props.name;
    // function handleLogout(){
    //     naam = "anonymous";
    //     console.log(naam)
    // }

    let [naam , setNaam] = useState(props.name);
    function handleLogout(){
        setNaam('anonymous')
    }

  return (
    <div>
        <div>Naam: {naam}</div>
        <div>Age: {props.age}</div>

        <button onClick={handleLogout} >logout</button>
    </div>
  )
}

export default Naam