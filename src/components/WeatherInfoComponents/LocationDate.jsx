import React from "react";

export default function LocationDate({ weatherData }) {
  const { name, country } = weatherData;

  const getCurrentDate = () => {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = now.getDate();
    const weekDay = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = `${day} ${month}, ${weekDay}`;
    return date;
  };
  const date = getCurrentDate();

  return (
    <div className="location-and-date">
      <h1 className="location-and-date__location">
        {name}, {country}
      </h1>
      <div>{date}</div>
    </div>
  );
}
