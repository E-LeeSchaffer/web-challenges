import getRandomColor from "../../utils/randomColor.js";

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("circle");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
  });
  return square;
}

const squareElement = createSquare();

export { createSquare, squareElement };
