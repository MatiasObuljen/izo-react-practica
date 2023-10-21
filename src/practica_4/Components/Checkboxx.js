import { useState } from "react";

export default function Checkboxx( { getValueCheckbox } ) {

    const [checkbox, setcheckbox] = useState(0);

    const onChangeCheckbox = (event) => event.target.checked ? setcheckbox(1) : setcheckbox(0);

    return(
        <div onClick={ getValueCheckbox(checkbox) }>
            <label>
                <input type="checkbox" onChange={ (event) => { onChangeCheckbox(event) } }/>
            </label><br/>
            <label htmlFor="input1"> ___________________________________ Resultado 2: { checkbox === 0 ? '( false )' : '( true )' }</label><br/><br/>
        </div>
    )
}