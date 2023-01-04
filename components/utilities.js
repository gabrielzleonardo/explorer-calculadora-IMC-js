import Modal from "./Modal.js";

let message;

export const calculateIMC = (weight, height) =>
  (weight / (height * 0.01) ** 2).toFixed(2);

export const notANumber = (value) => isNaN(value) || value == "";

export const resultMessage = (result) => {
  if (result < 18.5) {
    message = `Seu IMC é de ${result}
      Classificação: MAGREZA`;
  } else if (18.5 <= result <= 24.9)
  {
    message = `Seu IMC é de ${result}
      Classificação: NORMAL`;
  } else if (25 <= result <= 29.9)
  {
    message = `Seu IMC é de ${result}
      Classificação: SOBREPESO`;
  } else if (30 <= result <= 39.9)
  {
    message = `Seu IMC é de ${result}
      Classificação: OBESIDADE`;
  } else if (result > 40)
  {
    message = `Seu IMC é de ${result}
      Classificação: OBESIDADE GRAVE`;
  }

  Modal.message.innerText = message;
  Modal.open();
};
