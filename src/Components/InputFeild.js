import React from 'react'

function InputFeild(props) {
    return (
        <div className="field">
          <label>{props.label}</label>
          <input type={props.type} name={props.name} placeholder={props.placeholder} />
        </div>
    )
}

export default InputFeild
