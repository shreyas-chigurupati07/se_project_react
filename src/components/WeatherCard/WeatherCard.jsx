import "./WeatherCard.css";
import cloud from "../../assets/cloud.png";
import sun from "../../assets/sun.png";

function WeatherCard() {
  return (
    <div className="weather__card_container">
      <div className="weather__card">
        <p className="weather__card_temp">75°F</p>
        <img src={cloud} alt="cloud" className="weater__card_cloud" />
        <img src={sun} alt="sun" className="weather__card_sun" />
      </div>
      <p className="weather__card_info">
        Today is 75°F / You may want to wear:
      </p>
    </div>
  );
}

export default WeatherCard;
