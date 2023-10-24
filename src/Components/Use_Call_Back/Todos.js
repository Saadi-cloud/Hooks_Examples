import React, { useState } from 'react'

export default function Todos() {
    const [count, setCount] = useState();
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount ((c) => c+1)
    }
    const addtodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    }
  return (
    <div>
        Count: {count}  
        <button onClick={increment}>+</button>

        <hr/>
        <Todos todos={todos} addtodo={addtodo} />
    </div>
    
  )
}
