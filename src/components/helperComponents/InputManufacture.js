import React from 'react';

const InputManufacture = (props)=>{
    return (
        <div>
            <input type="radio" onChange={props.onChange} name="manufacture"  value={props.manufacture} />
            <label htmlFor={props.manufacture}>{props.manufacture}</label>
        </div>
    )
}



export default InputManufacture;