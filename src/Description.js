import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="row weather-description">
      <div className="col-4">
        <ul>
          <li>
            Humidity:<span id="humidity"></span>%
          </li>
        </ul>
      </div>
      <div className="col-4">
        <ul>
          <li>
            Max.Temp:<span id="max"></span>°C
          </li>
        </ul>
      </div>
      <div className="col-4">
        <ul>
          <li>
            Min.Temp:<span id="min"></span>°C
          </li>
        </ul>
      </div>
    </div>
  );
}
