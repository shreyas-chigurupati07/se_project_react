import { useEffect, useState } from "react";
import "./ModalWithForm.css";
import modalCloseBtn from "../../assets/closebtn.svg";

function ModalWithForm({ isOpen, onClose, title, buttonText }) {
  const [selectedWeather, setSelectedWeather] = useState("");

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
          <label htmlFor="new-garment-name" className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              id="new-garment-name"
              name="name"
              placeholder="Name"
              minLength={2}
              maxLength={40}
              required
            />
            <span id="new-garment-name-error" className="modal__error"></span>
          </label>
          <label htmlFor="new-garment-image" className="modal__label">
            Image
            <input
              type="url"
              className="modal__input"
              id="new-garment-image"
              name="image"
              placeholder="Image URL"
              required
            />
            <span id="new-garment-image-error" className="modal__error"></span>
          </label>
          <fieldset className="modal__radio-btn">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className={`modal__label_type_radio-btn ${selectedWeather && selectedWeather !== "1" ? "modal__radio-unselected" : ""}`}
            >
              <input
                id="hot"
                type="radio"
                className="modal__input_type_radio-btn"
                name="weather"
                value={1}
                onChange={(e) => setSelectedWeather(e.target.value)}
              />
              Hot
            </label>
            <label
              htmlFor="warm"
              className={`modal__label_type_radio-btn ${selectedWeather && selectedWeather !== "2" ? "modal__radio-unselected" : ""}`}
            >
              <input
                id="warm"
                type="radio"
                className="modal__input_type_radio-btn"
                name="weather"
                value={2}
                onChange={(e) => setSelectedWeather(e.target.value)}
              />
              Warm
            </label>
            <label
              htmlFor="cold"
              className={`modal__label_type_radio-btn ${selectedWeather && selectedWeather !== "3" ? "modal__radio-unselected" : ""}`}
            >
              <input
                id="cold"
                type="radio"
                className="modal__input_type_radio-btn"
                name="weather"
                value={3}
                onChange={(e) => setSelectedWeather(e.target.value)}
              />
              Cold
            </label>
          </fieldset>
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
