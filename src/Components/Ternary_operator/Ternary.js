import React from "react";

function Ternary() {
  let index = true;
  const [first, setFirst] = React.useState();
  return (
    <div>
      <h1>Ternary Operator Example 1</h1>
      {
        (index = false ? (
          <h1>the condition is true</h1>
        ) : (
          <h3>Condition is false</h3>
        ))
      }

      <button onClick={() => setFirst(!first)} style={{ float: "right" }}>
        <i className="fa-solid fa-house"></i>
      </button>

      <div className={first ? "act" : "sidebar"}>
        <a className="#" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Ternary;
