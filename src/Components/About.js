import React from 'react'
import { useNavigate} from 'react-router-dom'
export default function About() {
    const navigate = useNavigate();
  return (
    <div>
    
      <h1>Here is my second page where i want to move</h1>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}
