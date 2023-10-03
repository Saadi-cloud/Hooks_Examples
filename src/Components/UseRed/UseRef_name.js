import React, { useRef, useState } from "react";

export default function UseRef_name() {
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const inputfield = useRef();
  const lettersOnly = /^[A-Za-z]+$/;
  const checkdata = () => {
    if (name.match(lettersOnly)) {
      setMessage("Name is valid");
    } else {
      inputfield.current.focus();
      setMessage("Please Do not use number");
    }
  };
  return (
    <div>
     <h1 className="ms-3">UseRef_name</h1> 
      <input
        type="text"
        ref={inputfield}
        placeholder="Please Do not enter a number"
        onChange={(e) => setName(e.target.value)}
        className="form-control w-25 my-3 ms-3"
      />
      <button className="btn btn-primary ms-3" onClick={checkdata}>Check</button>
      <p className="ms-3 bg-success mt-3 text-white py-3 ps-2">{message}</p>
      <p className="ms-3 bg-danger text-white py-3 ps-2">{name}</p>
    </div>
  );
}
