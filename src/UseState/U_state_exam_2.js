import React, { useState } from 'react'

export default function U_state_exam_2() {
    const [model, setmodel] = useState("Cultus");
    const [brand, setbrand] = useState("HONDA");
    const [color, setcolor] = useState("BLACK");
    const [year, setyear] = useState("2021");
  return (
    <div>
      <h1>My Car Name is {model} </h1>
      <h3>My car brand is {brand} and color is {color} and making year of car is {year} </h3>
    </div>
  )
}
