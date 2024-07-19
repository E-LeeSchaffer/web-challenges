import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  return valueA + valueB;
}

export default function App(valueA, valueB) {
  return (
    <h1>
      <Sum valueA={2} valueB={3} />
    </h1>
  );
}
