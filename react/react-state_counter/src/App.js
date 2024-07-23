import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCount(count - 1);
            console.log("counts minus");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
            console.log("counts plus");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
