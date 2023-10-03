import React, { useContext } from 'react'
import { Context2 } from './CreateContext'
export default function ComC() {
    const appdataa = useContext(Context2)
  return (
    <div>
        <h1>{appdataa}</h1>
    </div>
  )
}
