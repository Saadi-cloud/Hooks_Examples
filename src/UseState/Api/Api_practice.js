import React, { useState, useEffect } from 'react'

export default function Api_practice() {
    const [Data, setData] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res=> res.json())
      .then(Data => setData(Data))
      .catch(error => console.log("fetch the error", error));
    }, [])

    const [value, setValue] = useState(3);
    const moreData = Data.slice(0,value);
    const mylove = () =>  {
        setValue(value+value);
    }
    
  return (
    <div>
    {moreData.map(item => (
        <>
        <p>Id is {item.id}</p>
        <p>title name is: {item.title}</p>
        
        </>
        
    ))}
    <button onClick={mylove}>Load More</button>
    </div>
  )
}
