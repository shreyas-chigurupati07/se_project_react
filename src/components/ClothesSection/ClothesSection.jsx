import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

export default function ClothesSection({ handleCardClick }) {
  return (
    <div className="clothessection">
      <div className="clothessection__header">
        <p className="clothessection__user-items">Your items</p>
        <button type="button" className="clothessection__clothes-btn">
          + Add new
        </button>
      </div>
      <div className="clothessection__items">
        <ul className="clothessection__container">
          {defaultClothingItems.map((clothingItem) => {
            return (
              <ItemCard
                key={clothingItem._id}
                item={clothingItem}
                onCardClick={handleCardClick}
              ></ItemCard>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
