import Modal from "./Modal.js";

let message;
let type;
let bgcolor;

export const calculateIMC = (weight, height) =>
  (weight / (height * 0.01) ** 2).toFixed(2);

export const notANumber = (value) => isNaN(value) || value == "";

export const resultMessage = (result) => {
  if (result <  18.5) {
    bgcolor = `#ffcb00`;
    message = `Seu IMC é de ${result}`;
    type = "Classificação: MAGREZA";
    Modal.type.style.backgroundColor = bgcolor;
  } else if (result < 25) {
    bgcolor = `#5abae0`;
    message = `Seu IMC é de ${result}`;
    type = "Classificação: NORMAL";
    Modal.type.style.backgroundColor = bgcolor;
  } else if (result < 30) {
    bgcolor = `#c85383`;
    message = `Seu IMC é de ${result}`;
    type = "Classificação: SOBREPESO";
    Modal.type.style.backgroundColor = bgcolor;
  } else if (result < 40) {
    bgcolor = `#e11a21`;
    message = `Seu IMC é de ${result}`;
    type = "Classificação: OBESIDADE";
    Modal.type.style.backgroundColor = bgcolor;
  } else  {
    bgcolor = `#c3272f`;
    message = `Seu IMC é de ${result}`;
    type = "Classificação: OBESIDADE GRAVE";
    Modal.type.style.backgroundColor = bgcolor;
  }

  Modal.message.innerText = message;
  Modal.type.innerText = type;
  Modal.open();
};
