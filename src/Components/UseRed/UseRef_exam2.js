import React, {useRef, useState, useEffect } from 'react'

export default function UseRef_exam2() {
    const [input, setInput] = useState("")
    const prevState = useRef("");

    useEffect(() => {
      prevState.current = input; 
    },[input])

    const data = (e) => {
        setInput(e.target.value);
    }
    
  return (
    <div>
        <h1>UseRef Example 2</h1>
        <input type="text" onChange={data} />
        <h5>My Previous state {prevState.current}</h5>
    </div>
  )
}
