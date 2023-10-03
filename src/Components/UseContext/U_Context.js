import React, { useContext } from 'react'
import { Context } from './CreateContext'
export default function U_Context() {
    const appdata = useContext(Context)
    console.log("Data : ", appdata)
    
  return (
    <div>
        <h1>{appdata}</h1>
        <h6>{appdata}</h6>
        
    </div>
  )
}
