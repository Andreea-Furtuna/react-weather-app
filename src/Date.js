import React from "react";
import "./Date.css";

export default function Date() {
  return (
    <div className="weather-overview">
      <div className="row city-date">
        <div className="col-6">
          <h1>
            <strong id="city"></strong>
          </h1>
          <ul>
            <li id="description"></li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <span id="full-date" className="new-date">
                {" "}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
