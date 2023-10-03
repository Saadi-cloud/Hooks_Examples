import React, { useState, useEffect, useRef } from "react";

export default function UseRef_exam() {
  const [data, setdata] = useState(0);
  const counter = useRef(0);
  useEffect(() => {
    counter.current = counter.current + 1;
  });

  const update = (e) => {
    setdata(e.target.value);
  };
  return (
    <div>
       <h1>UseRef Hook Example 1</h1> 
      <input type="input" onChange={update} />
      <h4>The number of render is {counter.current}</h4>
    </div>
  );
}
