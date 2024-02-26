import React, { useState } from "react";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import SearchWeather from "./components/SearchWeather";

function App() {
  const initialWeatherData = {
    isRendered: false,
  };

  const [weatherData, setWeatherData] = useState(initialWeatherData);
  const [cityName, setCityName] = useState("");

  const handleWeatherDataChange = (newWeatherData) => {
    setWeatherData(newWeatherData);
  };

  return (
    <div>
      {weatherData.isRendered ? (
        <WeatherInfo weatherData={weatherData} />
      ) : (
        <SearchWeather
          setWeatherData={handleWeatherDataChange}
          cityName={cityName}
          setCityName={setCityName}
        />
      )}
    </div>
  );
}

export default App;
