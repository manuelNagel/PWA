import React from 'react';

const WeatherCard = ({ location, current }) => {
  return (
    <div className="weather-card">
      <h2>{location.name}, {location.region}, {location.country}</h2>
      <div className="weather-details">
        <div>
          <img src={`https:${current.condition.icon}`} alt={current.condition.text} />
          <p>{current.condition.text}</p>
        </div>
        <div>
          <p>Temperature: {current.temp_c}°C</p>
          <p>Feels Like: {current.feelslike_c}°C</p>
          <p>Wind: {current.wind_kph} km/h, {current.wind_dir}</p>
          <p>Humidity: {current.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
