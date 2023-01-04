import Modal from "./Modal.js";

export const calculateIMC = (weight, height) =>
  (weight / (height * 0.01) ** 2).toFixed(2);

export const notANumber = (value) => isNaN(value) || value == "";

export const resultMessage = (result) => {
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};
