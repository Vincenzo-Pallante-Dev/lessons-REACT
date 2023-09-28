// import React, { useEffect, useRef, useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { Link, useNavigate, useParams } from "react-router-dom";

export function WelcomeFunctionTwo() {
  // const [name, setName] = useState("World");
  // const inputRef = useRef();
  const navigate = useNavigate();
  const { name = "World" } = useParams();

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  // function handleNameChange(event) {
  //   setName(event.target.value);
  // }

  function handleLoginButtonClick() {
    navigate("/login");
  }

  return (
    <div>
      <DisplayLanguage />
      <h2>Hello, {name}!</h2>
      {/* <input ref={inputRef} value={name} onChange={handleNameChange} /> */}
      <Link to="/login">Login to the app</Link>
      <div>
        <button onClick={handleLoginButtonClick}>Enter the app</button>
      </div>
    </div>
  );
}
