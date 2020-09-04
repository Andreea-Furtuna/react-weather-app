import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="clearfix weather-image">
          <img
            src="https://www.iconspng.com/images/sun-behind-clouds-remix/sun-behind-clouds-remix.jpg"
            className="float-left"
            id="icon"
            width="50%"
            alt="clear sky"
          />
          <div class="float-left">
            <strong id="temperature"></strong>
            <span className="units">
              <a href="#" id="celsius-link" className="active">
                °C
              </a>{" "}
              |
              <a href="#" id="fahrenheit-link" className="fahr">
                F
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Feels like:<span id="feel"></span>°C
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG_JuVgXh3RA-sHP6xZeD93Cn_nr_eme-KUg&usqp=CAU"
              width="50px"
              alt="temp"
            />
          </li>
          <br />
          <li>
            Wind:<span id="wind"></span>km/h
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgJIq_P2f6Obg09N9HcHHUzYEfZ14AxbodRA&usqp=CAU"
              width="50px"
            />
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
}
