import React from "react";

export default function ForecastDaily({ forecast }) {
  if (!forecast || forecast.length === 0) {
    return null; // Return null or a loading message if data is not available
  }

  return (
    <div className="next-5-days">
      <h2 className="next-5-days__heading">Next 5 days | Every 3 hours</h2>
      <div className="next-5-days__container">
        {forecast.map((day, index) => (
          <div className="next-5-days__row" key={index}>
            <div className="next-5-days__date">
              {day.date}
              <div className="next-5-days__label">{day.label}</div>
            </div>

            <div className="next-5-days__low">
              {day.tempMin}&deg;
              <div className="next-5-days__label">Low</div>
            </div>

            <div className="next-5-days__high">
              {day.tempMax}&deg;
              <div className="next-5-days__label">High</div>
            </div>

            <div className="next-5-days__icon">
              <img src={day.weatherIcon} alt={day.description} />
            </div>

            <div className="next-5-days__rain">
              {day.rain}%<div className="next-5-days__label">Rain</div>
            </div>

            <div className="next-5-days__wind">
              {day.windSpeed} m/s
              <div className="next-5-days__label">Wind</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
