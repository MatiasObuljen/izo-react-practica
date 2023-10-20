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
    const onChangeGate = (event) => setGate(event.target.value);

    const onChangeResult = () => {
        const t = '( true ) .... ', f = '( false ) .... '
        switch (gate) {
            case 'AND':
                input1 && checkbox ? setResult(t + gate) : setResult(f + gate);
                break;
            case 'OR':
                input1 || checkbox ? setResult(t + gate) : setResult(f + gate);
                break;
            case 'NAND':
                (!(input1 && checkbox)) ? setResult(t + gate) : setResult(f + gate);
                break;
            case 'NOR':
                (!(input1 || checkbox)) ? setResult(t + gate) : setResult(f + gate);
                break;
            case 'XOR':
                input1 ^ checkbox ? setResult(t + gate) : setResult(f + gate);
                break;

            default:
                setResult('default');
                break;
        }
    };

    return (
        <div className="App">
            <div>
                <label htmlFor="input1"></label><br/>
                <input
                    id="input1"
                    type="number"
                    value={input1}
                    onChange={onChangeInput}
                /><br/>
                <label htmlFor="input1"> ___________________________________ Resultado 1: { input1 === 0 ? '( false )' : '( true )' } </label><br/><br/>
            </div>
            <div>
                <label>
                    <input type="checkbox" onChange={onChangeCheckbox}/>
                </label><br/>
                <label htmlFor="input1"> ___________________________________ Resultado 2: { checkbox === 0 ? '( false )' : '( true )' }</label><br/><br/>
            </div>
            <div>
                <label htmlFor="selectGate">Compuerta lógica </label>
                <select id="selectGate" onChange={ (event) => onChangeGate(event) }>
                    {logicGatesArray.map((element, index) => {
                        return <option key={index} value={element}>{element}</option>;
                    }
                    )}
                </select><br/><br/>
                <label> ___________________________________ Compuerta: {gate} </label><br/><br/>
            </div>
            <br/>
            <button onClick={onChangeResult}> CALCULAR COMPUERTA </button>
            <br/><br/>
            <div><span> ___________________________________ Resultado: {result}</span></div>
        </div >
    );
};