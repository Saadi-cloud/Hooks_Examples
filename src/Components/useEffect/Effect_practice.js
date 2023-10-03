import React, { useEffect, useState } from 'react'

function Effect() {
    const [data, setData] = useState(0);
    const [data1, setData1] = useState(0);
    useEffect(() => {
        window.alert('useeffect called');
    }, [data, data1])
    console.log('function Body')
  return (
    <div>
        <button onClick={() => setData(data+1)}>click me {data}</button>
        <button onClick={() => setData1(data1+2)}>submit {data1}</button>
    </div>
  )
}

export default Effect