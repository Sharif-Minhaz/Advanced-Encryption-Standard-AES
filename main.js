import { mixColumnMatrix } from "./scripts/mixColumnMatrix.js";
import { sBox, inverseSBox } from "./scripts/sBoxes.js";

console.log((sBox[sBox.length - 1][sBox[sBox.length - 1].length - 1]).toString(16));