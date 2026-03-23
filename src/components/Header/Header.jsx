import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ handleAddBtnClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img src={headerLogo} alt="App logo" className="header__logo" />
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        type="button"
        className="header__clothes-btn"
        onClick={handleAddBtnClick}
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="User avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
