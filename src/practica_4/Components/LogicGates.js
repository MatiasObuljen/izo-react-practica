import { useState } from "react";
import Input1 from "./Input1";
import Checkboxx from "./Checkboxx";

export default function LogicGate() {

    const [logicGatesArray] = useState(['AND', 'OR', 'NAND', 'NOR', 'XOR']);
    const [gate, setGate] = useState('AND');
    const [result, setResult] = useState('');
    const [input1, setValueInput1] = useState();
    const [checkbox, setValueCheckbox] = useState();

    const onChangeGate = (event) => setGate(event.target.value);

    const onChangeResult = () => {
        const t = '( true )', f = '( false )'
        switch (gate) {
            case 'AND':
                input1 && checkbox ? setResult(t) : setResult(f);
                break;
            case 'OR':
                input1 || checkbox ? setResult(t) : setResult(f);
                break;
            case 'NAND':
                (!(input1 && checkbox)) ? setResult(t) : setResult(f);
                break;
            case 'NOR':
                (!(input1 || checkbox)) ? setResult(t) : setResult(f);
                break;
            case 'XOR':
                input1 ^ checkbox ? setResult(t) : setResult(f);
                break;

            default:
                setResult('default');
                break;
        }
    }

    const getValueInput1 = (i) => setValueInput1(i)
    const getValueCheckbox = (c) => setValueCheckbox(c)

    return(
        <div className="App">
        <div onMouseMove={ onChangeResult }>
            <Input1 getValueInput1={ getValueInput1 }></Input1>
            <Checkboxx getValueCheckbox={ getValueCheckbox }></Checkboxx>
            <label htmlFor="selectGate">Compuerta lógica </label>
            <select id="selectGate" onChange={ (event) => onChangeGate(event) }>
                    {logicGatesArray.map((element, index) => {
                        return <option key={index} value={element}>{element}</option>;
                    })
                }
            </select><br/><br/>
            <label> ___________________________________ Compuerta: {gate} </label><br/><br/>
            </div>
            <br/>
            <div>
                <span> ___________________________________ Resultado: {input1 +' '+ gate +' '+ checkbox +' = '}{result}</span>
            </div>
        </div>
    )
}