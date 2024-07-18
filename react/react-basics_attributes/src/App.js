import React from "react";
import "./styles.css";

function Article() {
  return (
    <article>
      <h2 className="article__title">Title</h2>
      <label htmlFor="input">Name:</label>
      <input id="input" placeholder="type in your input"></input>
      <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        Go to Wikipedia
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
