import { useState } from "react"

export default function Tarea1 () {
    const [array, setArray] = useState([])
    const [nuevo, setNuevo] = useState("")
    const [input, setInput] = useState("")
    const [guardadito, setGuardadito] = useState(false)
    const [editarIndex, setEditarIndex] = useState(-1)

    const onChangeButton = (event) =>{
        setNuevo(event.target.value)
    }
    const onChangeInput = (event) =>{
        setArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[editarIndex] = event.target.value;
            return newArray;
        });
    }
    const onClickButton = () =>{
        let newArray = [...array, nuevo]
        setArray(newArray)
    }
    const handleBorrar = (index) =>{
        let newArray = [...array]
        newArray.splice(index,1)
        setArray(newArray)
        setGuardadito(false)
    } 
    const handleEditar = (index, event) =>{
        setEditarIndex(index)
        setGuardadito(true)
        setInput(array[index])
    }
    const handleGuardar = (event) =>{
    setGuardadito(false);
    setEditarIndex(-1)
    }

    return (
        <>
        <input type="text" onChange={onChangeButton}></input>
        <button onClick={onClickButton}>Botón</button><br/><br/>
        <label>ARRAY CREADO:</label>
        {array.map ((element, index)=> {
            let valueDef = element.replace(',','.').replace('','+')
            return(
                <div key={index}>
                    <ul>
                        {isNaN(valueDef) &&
                        <>
                         <li>
                            <input type="text"
                                   value={index === editarIndex ? array[editarIndex] : element}
                                   onChange={onChangeInput}
                                   disabled={editarIndex !== index}/>
                            <button onClick={() => handleBorrar(index)}>Borrar</button>
                            <button onClick={() => handleEditar(index)}>Editar</button>
                            { editarIndex === index && guardadito? <button onClick={() => handleGuardar()}>Guardar</button>: null }
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