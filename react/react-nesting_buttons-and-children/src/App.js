import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me</Button>
      <Button>Click me 1</Button>
      <Button>Click me 2</Button>
      <Button>Click me 3</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
