import React, { useState } from "react";
import "./Weather.css";

const Weather = () => {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {

    if (!city) return;

    try {

      const API_KEY = "dd35d4f27b4a9746bfea6d09cd1db516";

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      if (data.cod === "404" || data.cod === 404) {

        setError("City not found");
        setWeather(null);

      } else {

        setWeather(data);
        setError("");

      }

    } catch (err) {

      console.error(err);

      setError("Something went wrong");
      setWeather(null);

    }

  };

  return (

    <div className="weather-container">

      <div className="weather-card">

        <h1>🌤 Weather App</h1>

        <div className="search-box">

          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && fetchWeather()
            }
          />

          <button onClick={fetchWeather}>
            Search
          </button>

        </div>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {weather && (

          <div className="weather-info">

            <h2>{weather.name}</h2>

            <h3>
              {Math.round(weather.main.temp)}°C
            </h3>

            <p>
              {weather.weather[0].description}
            </p>

            <div className="details">

              <div className="detail-box">

                <p>
                  {weather.main.humidity}%
                </p>

                <small>
                  Humidity
                </small>

              </div>

              <div className="detail-box">

                <p>
                  {weather.wind.speed} m/s
                </p>

                <small>
                  Wind Speed
                </small>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>

  );

};

export default Weather;