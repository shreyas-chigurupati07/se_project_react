import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleAddBtnClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <Link to="/">
        <img src={headerLogo} alt="App logo" className="header__logo" />
      </Link>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />

      <button
        type="button"
        className="header__clothes-btn"
        onClick={handleAddBtnClick}
      >
        + Add clothes
      </button>
      <Link to="/profile">
        <p className="header__username">Terrence Tegegne</p>
      </Link>
      <img src={avatar} alt="User avatar" className="header__avatar" />
    </header>
  );
}

export default Header;
