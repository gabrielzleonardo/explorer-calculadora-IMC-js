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

Modal.closeButton.onclick = () => Modal.close();

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    Modal.close();
  }
});

export default Modal;
