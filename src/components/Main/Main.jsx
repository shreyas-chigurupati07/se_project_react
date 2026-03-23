import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ defaultItems, weatherData, handleCardClick }) {
  return (
    <main className="main">
      <WeatherCard currentWeather={weatherData} />
      <ItemCard
        defaultItems={defaultItems}
        weatherData={weatherData}
        onCardClick={handleCardClick}
      />
    </main>
  );
}

export default Main;
