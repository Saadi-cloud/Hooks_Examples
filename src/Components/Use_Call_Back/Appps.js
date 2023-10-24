import React from 'react'
import { memo } from 'react'

const Appps = ({todos, Apptodo}) => {
    console.log("child render")
  return (
    <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
            <p key={index}>{todo}</p>
        })}
        <button onClick={addtodo}>Add todo</button>
    </div>

  )
}

export default Appps (Todos);