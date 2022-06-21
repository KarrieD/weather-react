import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  let weatherData = {
    city: "Chicago",
    date: "Thursday 10:00",
    description: "Cloudy",
    imgUrl: "https://openweathermap.org/img/wn/04d@2x.png",
    temperature: "64",
    humidity: "16",
    wind: "20",
  };
  return (
    <div className="weather-app">
      <div className="Weather">
        <Search />
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt="weather-icon"
              className="float-left"
            />
            <strong>{weatherData.temperature}</strong>
            <span className="units">°F </span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind}mph</li>
        </ul>
      </div>
    </div>
  );
}
