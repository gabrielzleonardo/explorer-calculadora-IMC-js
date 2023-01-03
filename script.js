const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
''
const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  closeButton: document.getElementById("close"),

  open() {
    Modal.wrapper.classList.add("open");
  },

  close() {
    Modal.wrapper.classList.remove("open");
  },
};

const IMC = (weight, height) => {
  return (weight / (height * 0.01) ** 2).toFixed(2);
};

form.onsubmit = (e) => {
  e.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;

  Modal.open();
};

Modal.closeButton.onclick = () => Modal.close();
