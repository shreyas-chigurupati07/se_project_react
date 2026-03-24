import "./ItemCard.css";

function ItemCard({ key, item, onCardClick }) {
  return (
    <li key={key} className="item__card">
      <img
        onClick={() => {
          onCardClick(item);
        }}
        className="item__card_img"
        src={item.link}
        alt={item.name}
      />
      <div className="item__card_label">{item.name}</div>
    </li>
  );
}

export default ItemCard;
