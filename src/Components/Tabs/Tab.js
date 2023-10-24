import React, { useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'
import ComC from './ComC'

export default function Tab() {
    const [comp, setComp] = useState(1);
  
  return (
    <div>
        <h1>Tab with diffault ternary operator</h1>
        <button className={comp == 1 ?'btn btn-primary mx-2':'btn btn-success mx-2'} onClick={()=> setComp(1)}>Tab 1</button>
        <button className={comp == 2 ?'btn btn-primary mx-2':'btn btn-success mx-2'} onClick={()=> setComp(2)}>Tab 2</button>
        <button className={comp == 3 ?'btn btn-primary mx-2':'btn btn-success mx-2'} onClick={()=> setComp(3)}>Tab 3</button>
        {comp == 1 ? <ComA/> : ""}
        {comp == 2 ? <ComB/> : ""}
        {comp == 3 ? <ComC/> : ""}
    </div>
  )
}
