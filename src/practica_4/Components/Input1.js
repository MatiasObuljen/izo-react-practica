import { useState } from "react";

export default function Input1( { getValueInput1 } ) {

    const [input1, setInput1] = useState(Math.round(Math.random()));

    const onChangeInput = (event) => {
        let i = event.target.value;
        if (i != 0 && i != 1) i = 0;
        setInput1(i);
    };

    return(
        <div onClick={ getValueInput1(input1) }>
            <label htmlFor="input1"></label><br/>
            <input id="input1" type="number" value={input1} onChange={ (event) => { onChangeInput(event) } }/><br/>
            <label htmlFor="input1"> ___________________________________ Resultado 1: { input1 == 0 ? '( false )' : '( true )' } </label><br/><br/>
        </div>
    )
}
    