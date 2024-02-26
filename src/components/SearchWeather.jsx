import React from "react";

export default function SearchWeather({
  cityName,
  setCityName,
  setWeatherData,
}) {
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

  const handleFinalWeather = async (e) => {
    e.preventDefault();
    setCityName(e.target.value);
    const formattedCurrentWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=89d4cfbfc68753c0f838ed1cf1b4fbea&units=metric`
    )
      .then((res) => res.json())
      .then((data) => formatWeather(data));
    setWeatherData({
      ...formattedCurrentWeather,
      isRendered: true,
    });
    setCityName("");
    setWeatherData({
      ...formattedCurrentWeather,
      isRendered: !isRendered,
    });
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
