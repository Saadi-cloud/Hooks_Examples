import React, { useState } from 'react'

export default function U_state_count() {
    const [count, setcount] = useState(0);
  return (
    <div>
      <p>you clicked {count} times</p>
      <button className='btn btn-primary' onClick={()=> setcount(count+1)}>Count increment</button>
      <button className='btn btn-dark ms-4' onClick={()=> setcount(count-1)}>Count Decrement</button>
    </div>
  )
}
