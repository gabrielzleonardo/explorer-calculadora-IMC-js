import { AlertError } from "./alert.js";
import { calculateIMC, notANumber, resultMessage } from "./utilities.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();
form.onsubmit = (e) => {
  e.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNaN = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNaN) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(weight, height);
  resultMessage(result);
};
