import React, { useState } from "react";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import SearchWeather from "./components/SearchWeather";


function App() {

	const [weatherData, setWeatherData] = useState({});
	const [cityName, setCityName] = useState('');

  	return (
		<div>
			{
				weatherData.isRendered ? <WeatherInfo weatherData={weatherData} />
				: <SearchWeather weatherData={weatherData} setWeatherData={setWeatherData} cityName={cityName} setCityName={setCityName} />
			}
		</div>
			
	)
}

export default App;
