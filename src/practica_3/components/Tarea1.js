import { useState } from "react"

export default function Tarea1 () {
    const [array, setArray]= useState([])
    const [nuevo, setNuevo]= useState("")

    const onChangeButton = (event) =>{
        setNuevo(event.target.value)
    }
    const onClickButton = () =>{
        let newArray = [...array, nuevo]
        setArray(newArray)
    }
    const handleBorrar = (index) =>{
        let newArray = array
        newArray.splice(index)
        setArray(newArray)
    } 

    return (
        <>
        <input type="text" onChange={onChangeButton}></input>
        <button onClick={onClickButton}>Botón</button><br/><br/>
        <label>ARRAY CREADO</label>
        {array.map ((element, index)=>{
            return(
                <div key={index}>
                    <ul>
                        {isNaN(element) &&
                        <>
                         <li>
                            <input type="text" value={element} />
                            <button onClick={() => handleBorrar(index)}>Borrar</button>
                         </li>
                         
                         </>
                         }
                         {!isNaN(element) &&
                         <li>{element} es {element %2 === 0 ? "Par":"Impar"}</li>
                         }
                    </ul>
                </div>
            )
        })}
        </>
    )
}