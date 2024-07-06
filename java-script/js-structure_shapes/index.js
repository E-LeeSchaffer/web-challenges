import { createCircle } from "./components/Circle/Circle.js";
import { createSquare } from "./components/Square/Square.js";
import { createPentagon } from "./components/Pentagon/Pentagon.js";

console.clear();

const circle = createCircle();
const square = createSquare();
const pentagon = createPentagon();

const root = document.getElementById("root");

root.append(circle, square, pentagon);
