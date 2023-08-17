import React, { useState } from 'react'

export default function U_state_exam_1() {
    const [color, setcolor] = useState ("red");
    
  return (
    <div>
      <h1>My name is Saad and My color is {color}</h1>
      <button type='button' onClick={()=> setcolor("Orange")}>1st Change color</button>
      <button type='button' onClick={() => setcolor("Pink")}>2nd Change Color</button>
      <button type='button' onClick={()=> setcolor("Gray")}>3rd Change Color</button>
    </div>
  )
}
