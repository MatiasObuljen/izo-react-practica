import { useState } from "react";

export default function Practica4() {
    const [input1, setInput1] = useState(Math.round(Math.random()));
    const [checkbox, setcheckbox] = useState(0);
    const [logicGatesArray, setLogicGatesArray] = useState(['AND', 'OR', 'NAND', 'NOR', 'XOR']);
    const [gate, setGate] = useState('AND');
    const [result, setResult] = useState('');

    const onChangeInput = (event) => {
        let i = event.target.value;
        if (i != 0 && i != 1) i = 0;
        setInput1(i);
    };

    const onChangeCheckbox = (event) => event.target.checked ? setcheckbox(1) : setcheckbox(0);
    const onChangeGate = (event) => {
        setGate(event.target.value);
        //console.log(result);
    };

    const onChangeResult = () => {
        switch (gate) {
            case 'AND':
                input1 && checkbox ? setResult('true') : setResult('false');
                break;
            case 'OR':
                input1 || checkbox ? setResult('true') : setResult('false');
                break;
            case 'NAND':
                input1 && checkbox ? setResult('true') : setResult('false');
                break;
            case 'NOR':
                (!(input1 || checkbox)) ? setResult('true') : setResult('false');
                break;
            case 'XOR':
                input1 ^ checkbox ? setResult('true') : setResult('false');
                break;

            default:
                setResult('true');
                break;
        }
    };

    return (
        <div className="App">
            <div>
                <label htmlFor="input1">Entrada 1:</label>
                <input
                    id="input1"
                    type="number"
                    value={input1}
                    onChange={onChangeInput}
                />
                <label htmlFor="input1"> ---- Resultado: {input1 === 0 ? 'false' : 'true'} </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        onChange={onChangeCheckbox}

                    /> Entrada 2
                </label>
                <label htmlFor="input1"> ---------------------------------- Resultado: {checkbox === 0 ? 'false' : 'true'} </label>
            </div>
            <div>
                <label htmlFor="selectGate">Compuerta lógica</label>
                <select id="selectGate" onChange={(event, gate) => { onChangeGate(event); onChangeResult(gate); }}>
                    {logicGatesArray.map((element, index) => {
                        return <option key={index} value={element}>{element}</option>;
                    }
                    )}
                </select>
                <label htmlFor="sarasa"> ----------------- Resultado: {gate} </label>
            </div>
            <div><span>--------------------------------------------------- Salida: {result}</span></div>
        </div >
    );
};