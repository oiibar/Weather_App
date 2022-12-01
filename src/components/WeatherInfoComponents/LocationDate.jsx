import React, { useEffect } from 'react'
import sunny from '../../icons/sunny.svg'
import mostlySunny from '../../icons/mostly-sunny.svg'

export default function LocationDate({ weatherData }) {

	const { name, country } = weatherData;

	const getCurrentDate = () => {
		const now = new Date();
		const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		
		const day = now.getDate();
		const weekDay = days[ now.getDay() ];
		const month = months[ now.getMonth() ];
		const lastDigit = Number(String(day).slice(-1));
		let ord;
		switch (lastDigit) {
			case 1:
				ord = 'st'
				break;
			case 2:
				ord = 'nd'
				break;
			case 3:
				ord = 'rd'
				break;
			default:
				ord = 'th'
				break;
		}
		const date = `${weekDay} ${day}${ord} ${month}`;
		return date;
	}
	const date = getCurrentDate();

	return (
		<div className="location-and-date">
			<h1 className="location-and-date__location">{name}, {country}</h1>
			<div>{date}</div>
		</div>
	)
}