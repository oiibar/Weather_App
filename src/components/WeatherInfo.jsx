import React from "react";
import LocationDate from "./WeatherInfoComponents/LocationDate";
import CurrentTemp from "./WeatherInfoComponents/CurrentTemp";
import CurrentStatus from "./WeatherInfoComponents/CurrentStatus";
import ForecastHourly from "./WeatherInfoComponents/ForecastHourly";
import ForecastDaily from "./WeatherInfoComponents/ForecastDaily";

function WeatherInfo({ weatherData }) {

	return (
		<main className="main-container">
			<LocationDate weatherData={weatherData} />
			<CurrentTemp weatherData={weatherData} />
			<CurrentStatus weatherData={weatherData} />
			{/*<ForecastHourly weatherData={weatherData} />
			<ForecastDaily weatherData={weatherData} />*/}
		</main>
	);
}

export default WeatherInfo;
