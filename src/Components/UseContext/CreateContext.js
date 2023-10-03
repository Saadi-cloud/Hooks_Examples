import React, { createContext, useState } from 'react'
import U_Context from './U_Context';
import ComC from './ComC';
    const Context = createContext();
    const Context2 = createContext();
export default function CreateContext() {
    const [create, setCreate] = useState("My name is Saad Aslam");
    const [data, setData] = useState("My father name is Muhammad Aslam");
    
  return (
    <div>
        
       <Context.Provider value={create}>
        <U_Context/>
        </Context.Provider>
        <Context2.Provider value={data}>
        <ComC/>
        </Context2.Provider>
        
    </div>
  )
}
export {Context, Context2}
