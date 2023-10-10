import { useState } from "react"

export default function Tarea1 () {
    const [array, setArray] = useState([])
    const [nuevo, setNuevo] = useState("")
    const [input, setInput] = useState("")
    const [disabled, setDisabled] = useState(true)
    const [guardadito, setGuardadito] = useState(false)

    const onChangeButton = (event) =>{
        setNuevo(event.target.value)
    }
    const onChangeInput = (event) =>{
        setInput(event.target.value)
    }
    const onClickButton = () =>{
        let newArray = [...array, nuevo]
        setArray(newArray)
    }
    const handleBorrar = (index) =>{
        let newArray = [...array]
        newArray.splice(index,1)
        setArray(newArray)
        guardadito(false)
    } 
    const handleEditar = (index) =>{
        setDisabled(false)
        setGuardadito(true)
    } 

    return (
        <>
        <input type="text" onChange={onChangeButton}></input>
        <button onClick={onClickButton}>Botón</button><br/><br/>
        <label>ARRAY CREADO:{JSON.stringify(array)}</label>
        {array.map ((element, index)=>{
            let valueDef = element.replace(',','.')
            return(
                <div key={index}>
                    <ul>
                        {isNaN(valueDef) &&
                        <>
                         <li>
                            <input  type="text" value={valueDef} onChange={onChangeInput} disabled={disabled}/>
                            <button onClick={() => handleBorrar(index)}>Borrar</button>
                            <button onClick={() => handleEditar(index)}>Editar</button>
                            {guardadito? <button onClick={() => handleEditar(index)}>Guardar</button>: null }
                            
                         </li>
                         
                         </>
                         }
                         {!isNaN(valueDef) &&
                         <li>{Math.round(valueDef)} es {Math.round(valueDef) %2 === 0 ? "Par":"Impar"}</li>
                         }
                    </ul>
                </div>
            )
        })}
        </>
    )
}