import "./ItemCard.css";
import shirt from "../../assets/shirt.png";
import shorts from "../../assets/shorts.png";
import cap from "../../assets/cap.png";
import sneakers from "../../assets/sneakers.png";

function ItemCard() {
  return (
    <div className="item__card_container">
      <p className="item__card_info">Today is 75°F / You may want to wear:</p>
      <div className="item__card_category-container">
        <div className="item__card">
          <img src={shirt} alt="shirt" className="item__card_category" />
          <div className="item__card_label">T-Shirt</div>
        </div>
        <div className="item__card">
          <img src={shorts} alt="shirt" className="item__card_category" />
          <div className="item__card_label">Shorts</div>
        </div>
        <div className="item__card">
          <img src={cap} alt="shirt" className="item__card_category" />
          <div className="item__card_label">Cap</div>
        </div>
        <div className="item__card item__card_sneakers">
          <img src={sneakers} alt="shirt" className="item__card_category" />
          <div className="item__card_label">Sneakers</div>
        </div>
        <div className="item__card">
          <img src={shirt} alt="shirt" className="item__card_category" />
          <div className="item__card_label">T-Shirt</div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
