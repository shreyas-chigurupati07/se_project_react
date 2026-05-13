import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUintContext";
import React from "react";

export default function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(CurrentTemperatureUnitContext);
  return (
    <label className="toggle-switch">
      <input type="checkbox" className="toggle-switch__checkbox" onChange={handleToggleSwitchChange} checked={currentTemperatureUnit === 'C'}/>
      <span className="toggle-switch__circle"></span>
      <span className="toggle-switch__text toggle-switch__text_F">F</span>
      <span className="toggle-switch__text toggle-switch__text_C">C</span>
    </label>
  );
}
