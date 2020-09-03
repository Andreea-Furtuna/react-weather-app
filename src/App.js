import React from "react";
import "./App.css";
import Search from "./Search";
import Date from "./Date";
import Temperature from "./Temperature";
import Description from "./Description";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search />
          <Date />
          <Temperature />
          <Description />
          <hr />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}
