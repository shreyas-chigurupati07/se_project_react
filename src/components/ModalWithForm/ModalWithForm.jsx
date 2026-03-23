import { useEffect } from "react";
import "./ModalWithForm.css";
import modalCloseBtn from "../../assets/closebtn.svg";

function ModalWithForm({ children, isOpen, onClose, title, buttonText }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`modal ${isOpen ? "modal__is-opened" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal__content">
        <p className="modal__title">{title}</p>
        <button type="button" className="modal__close-btn" onClick={onClose}>
          <img
            src={modalCloseBtn}
            alt="modal_closeBtn"
            className="modal__closeBtn-img"
          />
        </button>
        <form className="modal__form">
          {children}
          <button
            type="submit"
            className="modal__addgarment-btn modal__btn-disabled"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
