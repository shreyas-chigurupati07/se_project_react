import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { coordinates, APIkey } from "../../utils/constants";
import { filterWeatherData, getWeather } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUintContext";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";

function App() {
  // const [defaultCardItems, setDefaultCardItems] =
  //   React.useState(defaultClothingItems);
  const [activeModal, setActiveModal] = React.useState("");
  const [selectedCard, setSelectedCard] = React.useState({});
  const [selectedWeather, setSelectedWeather] = React.useState("");
  const [weatherData, setWeatherData] = React.useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  function handleOpenModal() {
    setActiveModal("open");
  }
  function handleCloseModal() {
    setActiveModal("");
  }

  function handleToggleSwitchChange() {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  }

  function handleSelectedCard(card) {
    setActiveModal("preview");
    setSelectedCard(card);
  }
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header
            handleAddBtnClick={handleOpenModal}
            weatherData={weatherData}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleSelectedCard}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile handleCardClick={handleSelectedCard} />}
            />
          </Routes>
          <Footer />
          <ModalWithForm
            isOpen={activeModal === "open"}
            onClose={handleCloseModal}
            name="New garment"
            buttonText="Add garment"
          >
            <label htmlFor="name" className="modal__label">
              Name{" "}
              <input
                type="text"
                className="modal__input"
                id="name"
                name="name"
                placeholder="Name"
                minLength={2}
                maxLength={40}
                required
              />
              <span id="name-error" className="modal__error"></span>
            </label>
            <label htmlFor="imageUrl" className="modal__label">
              Image{" "}
              <input
                type="url"
                className="modal__input"
                id="imageUrl"
                name="image"
                placeholder="Image URL"
                required
              />
              <span id="image-error" className="modal__error"></span>
            </label>
            <fieldset className="modal__radio-btn">
              <legend className="modal__legend">
                Select the weather type:
              </legend>
              <label
                htmlFor="hot"
                className={`modal__label_type_radio-btn ${selectedWeather && selectedWeather !== "1" ? "modal__radio-unselected" : ""}`}
              >
                <input
                  id="hot"
                  type="radio"
                  className="modal__input_type_radio-btn"
                  name="weather"
                  value={1}
                  onChange={(e) => setSelectedWeather(e.target.value)}
                />
                Hot
              </label>
              <label
                htmlFor="warm"
                className={`modal__label_type_radio-btn ${selectedWeather && selectedWeather !== "2" ? "modal__radio-unselected" : ""}`}
              >
                <input
                  id="warm"
                  type="radio"
                  className="modal__input_type_radio-btn"
                  name="weather"
                  value={2}
                  onChange={(e) => setSelectedWeather(e.target.value)}
                />
                Warm
              </label>
              <label
                htmlFor="cold"
                className={`modal__label_type_radio-btn ${selectedWeather && selectedWeather !== "3" ? "modal__radio-unselected" : ""}`}
              >
                <input
                  id="cold"
                  type="radio"
                  className="modal__input_type_radio-btn"
                  name="weather"
                  value={3}
                  onChange={(e) => setSelectedWeather(e.target.value)}
                />
                Cold
              </label>
            </fieldset>
          </ModalWithForm>
          <ItemModal
            isPreviewOpen={activeModal === "preview"}
            card={selectedCard}
            onCardClick={handleSelectedCard}
            onClose={handleCloseModal}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
