import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ defaultItems }) {
  return (
    <>
      <div className="main">
        <WeatherCard />
        <ItemCard defaultItems={defaultItems} />
      </div>
    </>
  );
}

export default Main;
