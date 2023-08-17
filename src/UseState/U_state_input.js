import React, { useState } from 'react'

export default function U_state_input() {
  const [text, setText] = useState("hello");
  function handlechange(e) {
    setText(e.target.value)
  }
  return (
    <div>
      <h1>Input form with handle change event and onclick event</h1>
      <input className='form-control' value={text} onChange={handlechange} />
      <p>You printed {text}</p>
      <button className='btn btn-primary' onClick={()=> setText("Reset Succesfully")}>reset</button>
    </div>
  )
}
