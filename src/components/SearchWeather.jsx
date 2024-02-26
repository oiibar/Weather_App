import React, { useState } from "react";

export default function SearchWeather({
  cityName,
  setCityName,
  setWeatherData,
}) {
  const [isRendered, setIsRendered] = useState(false);
  const formatWeather = (data) => {
    const {
      coord: { lat, lon },
      weather,
      main: { temp, feels_like, temp_min, temp_max, humidity },
      wind: { speed },
      dt,
      sys: { country, sunrise, sunset },
      name,
    } = data;
    const { id, description, icon } = weather[0];

    const temperature = Math.round(temp);
    const feelsLike = Math.round(feels_like);
    const tempMin = Math.round(temp_min);
    const tempMax = Math.round(temp_max);
    const weatherIcon = ` http://openweathermap.org/img/wn/${icon}.png`;
    const windSpeed = Math.round(speed);
    const snr = new Date(dt * 1000);
    let sunriseHours = new Date(sunrise * 1000).getHours();
    let sunriseMinutes = new Date(sunrise * 1000).getMinutes();
    let sunsetHours = new Date(sunset * 1000).getHours();
    let sunsetMinutes = new Date(sunset * 1000).getMinutes();
    if (sunriseHours < 10) {
      sunriseHours = `0${sunriseHours}`;
    }
    if (sunriseMinutes < 10) {
      sunriseMinutes = `0${sunriseMinutes}`;
    }
    if (sunsetHours < 10) {
      sunsetHours = `0${sunsetHours}`;
    }
    if (sunsetMinutes < 10) {
      sunsetMinutes = `0${sunsetMinutes}`;
    }
    const Sunrise = `${sunriseHours} : ${sunriseMinutes}`;
    const Sunset = `${sunsetHours} : ${sunsetMinutes}`;

    return {
      Sunrise,
      Sunset,
      temperature,
      feelsLike,
      tempMin,
      tempMax,
      humidity,
      windSpeed,
      dt,
      country,
      name,
      id,
      description,
      weatherIcon,
    };
  };

  const formatForecast = (data) => {
    const formattedForecast = data.list.map((item) => {
      const {
        dt,
        main: { temp, temp_min, temp_max, humidity },
        weather,
        wind: { speed },
      } = item;
      const { id, description, icon } = weather[0];
      const date = new Date(dt * 1000).toLocaleDateString();

      return {
        date,
        temperature: Math.round(temp),
        tempMin: Math.round(temp_min),
        tempMax: Math.round(temp_max),
        humidity,
        windSpeed: Math.round(speed),
        id,
        description,
        weatherIcon: `http://openweathermap.org/img/wn/${icon}.png`,
      };
    });

    return formattedForecast;
  };

  const handleFinalWeather = async (e) => {
    e.preventDefault();

    // Fetch current weather
    const currentWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=89d4cfbfc68753c0f838ed1cf1b4fbea&units=metric`
    );
    const currentWeatherData = await currentWeatherResponse.json();
    const formattedCurrentWeather = formatWeather(currentWeatherData);

    // Fetch 5-day forecast
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=89d4cfbfc68753c0f838ed1cf1b4fbea&units=metric`
    );
    const forecastData = await forecastResponse.json();
    const formattedForecast = formatForecast(forecastData);

    // Set state with current weather and forecast data
    setWeatherData({
      ...formattedCurrentWeather,
      forecast: formattedForecast,
      isRendered: true,
    });

    setCityName("");
    setIsRendered(!isRendered);
  };

  return (
    <div className="wrapper">
      <header>
        <i className="bx bx-left-arrow-alt"></i>Weather App
      </header>
      <section className="input-part">
        <p className="info-txt"></p>
        <div className="content">
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Enter city name"
            required
          />
          <div className="separator"></div>
          <button onClick={handleFinalWeather}>Get Weather</button>
        </div>
      </section>
    </div>
  );
}
