import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ defaultItems, weatherData, handleCardClick }) {
  return (
    <>
      <div className="main">
        <WeatherCard currentWeather={weatherData} />
        <ItemCard
          defaultItems={defaultItems}
          weatherData={weatherData}
          onCardClick={handleCardClick}
        />
      </div>
    </>
  );
}

export default Main;
