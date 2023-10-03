import React, { useRef } from 'react'

export default function UseRef_input() {
    const inputfield = useRef()
    const datasubmit = () => {
        // inputfield.current.focus();
        inputfield.current.value = "saad";
        inputfield.current.style.border = "2px solid red"
    }
  return (
    <div>
        <h1>UseRef with input</h1>
        <input type="text" ref={inputfield} />
        <button onClick={datasubmit}>submit</button>
    </div>
  )
}
