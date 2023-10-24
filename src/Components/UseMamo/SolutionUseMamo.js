import React, {useState, useMemo} from 'react'

export default function SolutionUseMamo() {
    const [count, setcount] = useState(0);
    const [name, setName] = useState('')
    const expenscal = (num) => {
      for (let i = 0; i < 1000000000; i++) {}
      return num;
    }
    // const calculation = expenscal(count);
    const calculation = useMemo(() => expenscal(count), [count])
  return (
<div>
      <h1>ab ase file ma hum use memo ko use kar ka solution find karien gay</h1>
      
      <h1>Increment: {count}</h1>
        <button onClick={() => setcount(count+1)}>Count</button><br />

        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <h1>name: {name}</h1>
        
    </div>
)
}
