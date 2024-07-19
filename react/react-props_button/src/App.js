import React from "react";
import "./styles.css";

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{
        backgroundColor: color,
        // backgroundColor: disabled ? "grey" : color,
        height: "100px",
        cursor: !disabled ? "pointer" : "",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <div>
      <Button color="lightgreen" text="click Button" onClick={handleClick} />
      <Button color="red" text="don't click Button" disabled />
      <Button color="pink" text="click Button" onClick={handleClick} />
    </div>
  );
}
