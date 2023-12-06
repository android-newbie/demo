import React, { useState } from "react";
import './App.css'
function Greet(props) {
    const [name, setName] = useState('default')

    function changeName() {
        setName('New name')
    }

    return (
        <div>
        {/* <h1 className="div">Hello {props.name}</h1> */}
        {/* <p>{props.date}</p> */}
        <h1 style={{
            color:'blue'
        }}>{name}</h1>
        <button onClick={changeName}>Change</button>
        </div>
    )   
}

export default Greet;