import { useEffect } from "react";
import "./ItemModal.css";
import modalCloseBtn from "../../assets/closebtn.svg";

function ItemModal({ card, isPreviewOpen, onClose }) {
  useEffect(() => {
    if (!isPreviewOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen, onClose]);
  return (
    <div
      className={`item__modal ${isPreviewOpen ? "item__modal_is-opened" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="item__modal_content">
        <img className="item__modal_img" src={card.link} alt={card.name} />
        <button
          type="button"
          className="item__modal_closeBtn"
          onClick={onClose}
        >
          <img
            src={modalCloseBtn}
            alt="Close icon"
            className="item__modal_closeBtn-img"
          />
        </button>
        <div className="item__modal_caption">
          <p className="item__modal_name">{card.name}</p>
          <p className="item__modal_weather">Weather:{card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
