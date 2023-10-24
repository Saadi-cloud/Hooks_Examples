import React, { useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'
import ComC from './ComC'

export default function Tab1() {
    const [comp, setComp] = useState(1);
  
  return (
    <div>
        <h1>Tabs with new way to use ternary operator</h1>
        <button style={{background: comp == 1 ? "skyblue" : "orange", margin: "20px"}} onClick={()=> setComp(1)}>Tab 1</button>
        <button style={{background: comp == 2 ? "skyblue" : "orange", margin: "20px"}} onClick={()=> setComp(2)}>Tab 2</button>
        <button style={{background: comp == 3 ? "skyblue" : "orange", margin: "20px"}} onClick={()=> setComp(3)}>Tab 3</button>
        {comp == 1 && <ComA/>}
        {comp == 2 && <ComB/>}
        {comp == 3 && <ComC/>}
    </div>
  )
}
