import React, { useReducer } from "react";
const initalstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};
function Reducer_exam_1() {
 const [count, dispatch] = useReducer(reducer, initalstate);
  return (
    <div>
        <div>Count: {count}</div>
      <button onClick={()=> dispatch("increment")}>increment</button>
      <button onClick={()=> dispatch("Decrement")}>Decrement</button>
    </div>
  );
}

export default Reducer_exam_1;
