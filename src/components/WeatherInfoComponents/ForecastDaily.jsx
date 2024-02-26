import React from "react";
import sunny from "../../icons/sunny.svg";

export default function ForecastDaily() {
  return (
    <div className="next-5-days">
      <h2 className="next-5-days__heading">Next 5 days</h2>
      <div className="next-5-days__container">
        <div className="next-5-days__row">
          <div className="next-5-days__date">
            Tue
            <div className="next-5-days__label">30/7</div>
          </div>

          <div className="next-5-days__low">
            10&deg;
            <div className="next-5-days__label">Low</div>
          </div>

          <div className="next-5-days__high">
            21&deg;
            <div className="next-5-days__label">High</div>
          </div>

          <div className="next-5-days__icon">
            <img src={sunny} alt="Sunny" />
          </div>

          <div className="next-5-days__rain">
            0%
            <div className="next-5-days__label">Rain</div>
          </div>

          <div className="next-5-days__wind">
            12mph
            <div className="next-5-days__label">Wind</div>
          </div>
        </div>

        <div className="next-5-days__row">
          <div className="next-5-days__date">
            Wed
            <div className="next-5-days__label">31/7</div>
          </div>

          <div className="next-5-days__low">
            9&deg;
            <div className="next-5-days__label">Low</div>
          </div>

          <div className="next-5-days__high">
            18&deg;
            <div className="next-5-days__label">High</div>
          </div>

          <div className="next-5-days__icon">
            <img src={sunny} alt="Mostly sunny" />
          </div>

          <div className="next-5-days__rain">
            3%
            <div className="next-5-days__label">Rain</div>
          </div>

          <div className="next-5-days__wind">
            7mph
            <div className="next-5-days__label">Wind</div>
          </div>
        </div>

        <div className="next-5-days__row">
          <div className="next-5-days__date">
            Thur
            <div className="next-5-days__label">1/8</div>
          </div>

          <div className="next-5-days__low">
            7&deg;
            <div className="next-5-days__label">Low</div>
          </div>

          <div className="next-5-days__high">
            15&deg;
            <div className="next-5-days__label">High</div>
          </div>

          <div className="next-5-days__icon">
            <img src={sunny} alt="Mostly sunny" />
          </div>

          <div className="next-5-days__rain">
            75%
            <div className="next-5-days__label">Rain</div>
          </div>

          <div className="next-5-days__wind">
            11mph
            <div className="next-5-days__label">Wind</div>
          </div>
        </div>

        <div className="next-5-days__row">
          <div className="next-5-days__date">
            Tue
            <div className="next-5-days__label">2/8</div>
          </div>

          <div className="next-5-days__low">
            12&deg;
            <div className="next-5-days__label">Low</div>
          </div>

          <div className="next-5-days__high">
            24&deg;
            <div className="next-5-days__label">High</div>
          </div>

          <div className="next-5-days__icon">
            <img src={sunny} alt="Sunny" />
          </div>

          <div className="next-5-days__rain">
            2%
            <div className="next-5-days__label">Rain</div>
          </div>

          <div className="next-5-days__wind">
            8mph
            <div className="next-5-days__label">Wind</div>
          </div>
        </div>

        <div className="next-5-days__row">
          <div className="next-5-days__date">
            Tue
            <div className="next-5-days__label">30/7</div>
          </div>

          <div className="next-5-days__low">
            10&deg;
            <div className="next-5-days__label">Low</div>
          </div>

          <div className="next-5-days__high">
            21&deg;
            <div className="next-5-days__label">High</div>
          </div>

          <div className="next-5-days__icon">
            <img src={sunny} alt="Mostly sunny" />
          </div>

          <div className="next-5-days__rain">
            0%
            <div className="next-5-days__label">Rain</div>
          </div>

          <div className="next-5-days__wind">
            12mph
            <div className="next-5-days__label">Wind</div>
          </div>
        </div>
      </div>
    </div>
  );
}
