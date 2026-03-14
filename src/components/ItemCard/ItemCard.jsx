import "./ItemCard.css";
import { defaultClothingItems } from "../../utils/clothingItems.js";

function ItemCard() {
  const itemCards = defaultClothingItems.map((clothingItem) => (
    <li key={clothingItem._id} className="item__card">
      <img
        className="item__card_img"
        src={clothingItem.link}
        alt={clothingItem.name}
      />
      <div className="item__card_label">{clothingItem.name}</div>
    </li>
  ));
  return <ul className="item__card_container">{itemCards}</ul>;
}

export default ItemCard;
