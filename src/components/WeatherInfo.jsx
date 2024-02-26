import React from "react";
import LocationDate from "./WeatherInfoComponents/LocationDate";
import CurrentTemp from "./WeatherInfoComponents/CurrentTemp";
import CurrentStatus from "./WeatherInfoComponents/CurrentStatus";
import ForecastDaily from "./WeatherInfoComponents/ForecastDaily";

function WeatherInfo({ weatherData }) {
  const { forecast } = weatherData; // Assuming forecastData is a property of weatherData

  return (
    <main className="main-container">
      <LocationDate weatherData={weatherData} />
      <CurrentTemp weatherData={weatherData} />
      <CurrentStatus weatherData={weatherData} />
      <ForecastDaily forecast={forecast} />
    </main>
  );
}

export default WeatherInfo;
