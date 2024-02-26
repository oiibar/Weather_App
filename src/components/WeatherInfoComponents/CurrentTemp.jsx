import React from "react";

export default function CurrentTemp({ weatherData }) {
  const { temperature, description, weatherIcon } = weatherData;

  return (
    <div className="current-temperature">
      <div className="current-temperature__icon-container">
        <img src={weatherIcon} className="current-temperature__icon" />
      </div>
      <div className="current-temperature__content-container">
        <div className="current-temperature__value">{temperature}&deg;</div>
        <div className="current-temperature__summary">{description}</div>
      </div>
    </div>
  );
}
