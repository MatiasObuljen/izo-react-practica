import React, { useState } from "react";

export default function Practica3 ({ props }) {
    const [info,setInfo] = useState('')
    const [array,setArray] = useState([])
    const HandlerInput = e => {
        setInfo(e.target.value)
    }
    const HandlerButton = () => {
        let newArray = array;
        newArray.push(info)
        setArray(newArray)
        console.log(array)
    }

    return (
        <>
            <h3>Práctica 3</h3>
            <input id="inputt" type="text" onChange={HandlerInput}/>
            <button onClick={HandlerButton}>Button</button>
            <p>{array}</p>
        </>
    );
}