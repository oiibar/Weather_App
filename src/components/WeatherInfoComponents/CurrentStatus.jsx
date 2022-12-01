import React from 'react'

export default function CurrentStatus({weatherData}) {

	const { tempMin, tempMax, windSpeed, humidity, Sunrise, Sunset } = weatherData

	return (
		<div className="current-stats">
			<div>
				<div className="current-stats__value">{tempMax}&deg;</div>
				<div className="current-stats__label">High</div>
				<div className="current-stats__value">{tempMin}&deg;</div>
				<div className="current-stats__label">Low</div>
			</div>
			<div>
				<div className="current-stats__value">{windSpeed} m/s</div>
				<div className="current-stats__label">Wind</div>
				<div className="current-stats__value">{humidity}%</div>
				<div className="current-stats__label">Rain</div>
			</div>
			<div>
				<div className="current-stats__value">{Sunrise}</div>
				<div className="current-stats__label">Sunrise</div>
				<div className="current-stats__value">{Sunset}</div>
				<div className="current-stats__label">Sunset</div>
			</div>
		</div>
	)
}