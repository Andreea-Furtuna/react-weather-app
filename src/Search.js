import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form id="search-form" className="mb-3">
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="How is the weather in ...?"
            className="form-control"
            id="city-input"
            autoComplete="off"
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="search-button" />
        </div>
        <div className="col-3">
          <button
            type="button"
            id="current-location-button"
            className="location-button"
            autoComplete="off"
          >
            <img
              src="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-location-icon-png-image_515424.jpg"
              className="location-icon"
              alt="source"
            />
          </button>
        </div>
      </div>
    </form>
  );
}
