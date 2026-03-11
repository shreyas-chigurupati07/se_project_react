import "./ItemCard.css";
import shirt from "../../assets/T-shirt.png";

function ItemCard() {
  return (
    <div className="item__card_container">
      <p className="item__card_info">Today is 75°F / You may want to wear:</p>
      <div className="item_card">
        <img src={shirt} alt="shirt" className="item__card_shirt" />
        <p className="item__card_label">T-Shirt</p>
      </div>
    </div>
  );
}

export default ItemCard;
