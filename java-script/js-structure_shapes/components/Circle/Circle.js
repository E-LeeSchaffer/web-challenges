import { getRandomColor } from "../../utils/randomColor.js";

function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
}

export { createCircle };
