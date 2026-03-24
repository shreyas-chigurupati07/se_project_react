import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function Main({ weatherData, handleCardClick }) {
  return (
    <main className="main">
      <WeatherCard currentWeather={weatherData} />
      <ul className="item__card_container">
        {defaultClothingItems
          .filter((clothingItem) => {
            return clothingItem.weather === weatherData.type;
          })
          .map((clothingItem) => {
            return (
              <ItemCard
                key={clothingItem._id}
                item={clothingItem}
                onCardClick={handleCardClick}
              ></ItemCard>
            );
          })}
      </ul>
    </main>
  );
}

export default Main;
