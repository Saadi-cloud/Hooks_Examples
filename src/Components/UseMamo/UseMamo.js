import { useState } from "react";

export default function UseMamo() {
    const [count, setcount] = useState(0);
    const [name, setName] = useState('')
    const expenscal = (num) => {
      for (let i = 0; i < 1000000000; i++) {}
      return num;
    }
    const calculation = expenscal(count);
    // console.log("Name",name);
  return (
    <div>
      <h1>ase ma hum na define kiya ha ka usememo ko kyun use karna ki zarorat ha</h1>
      <h5>ab ase ma mein na loop ma 1 bhout bare value di ha jo har bar render ho rahi ha lagai tou wo count pa ha but ose ka effect input field pa bhi ho raha jb ka input field ka koi relation nahi ha count ka sath ase problem sa bachana ka liya use memo istamaal kartay hn</h5>
      <h1>Increment: {count}</h1>
        <button onClick={() => setcount(count+1)}>Count</button><br />

        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <h1>name: {name}</h1>
        
    </div>
  )
}
