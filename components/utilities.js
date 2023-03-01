import Modal from "./Modal.js";

let messageDisplay;
let type;
let bgcolor;

export const calculateIMC = (weight, height) =>
  (weight / (height * 0.01) ** 2).toFixed(2);

export const notANumber = (value) => isNaN(value) || value == "";

export const resultMessage = (result) => {
  if (result <  18.5) {
    bgcolor = `#ffcb00`;
    messageDisplay = `Your BMI is ${result}`;
    type = "Rating: UNDERWEIGHT";
    Modal.type.style.backgroundColor = bgcolor;
  } else if (result < 25) {
    bgcolor = `#5abae0`;
    messageDisplay = `Your BMI is ${result}`;
    type = "Rating: NORMAL";
    Modal.type.style.backgroundColor = bgcolor;
  } else if (result < 30) {
    bgcolor = `#c85383`;
    messageDisplay = `Your BMI is ${result}`;
    type = "Rating: OVERWEIGHT";
    Modal.type.style.backgroundColor = bgcolor;
  } else if (result < 40) {
    bgcolor = `#e11a21`;
    messageDisplay = `Your BMI is ${result}`;
    type = "Rating: OBESE";
    Modal.type.style.backgroundColor = bgcolor;
  } else  {
    bgcolor = `#c3272f`;
    messageDisplay = `Your BMI is ${result}`;
    type = "Rating: EXTREMELY OBESE";
    Modal.type.style.backgroundColor = bgcolor;
  }

  Modal.message.innerText = messageDisplay;
  Modal.type.innerText = type;
  Modal.open();
};
