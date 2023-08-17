import React from 'react'
import {useNavigate } from 'react-router-dom'

export default function Use_navigation_hook() {
    const nav = useNavigate();
  return (
    <div>
      <h1>my name is saad</h1>
      <button onClick={()=>nav("/about")}>Go to about section</button>
    </div>
  )
}
