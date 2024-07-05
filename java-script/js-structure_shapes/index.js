import { createCircle } from "./components/Circle/Circle.js";
import { squareElement } from "./components/Square/Square.js";
import { pentagonElement } from "./components/Pentagon/Pentagon.js";

console.clear();
createCircle();

const root = document.getElementById("root");

root.append(circleElement, squareElement, pentagonElement);
