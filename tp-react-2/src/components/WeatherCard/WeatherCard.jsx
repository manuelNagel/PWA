import React from 'react';
import { Link } from 'react-router-dom';

const WeatherCard = ({ location, current }) => {
  let backgroundColor = '';
  let gradientClass = '';
  if (current.temp_c < 10) {
    backgroundColor = 'bg-cyan-500';
    gradientClass = 'from-cyan-500 to-transparent'; 
  } else if (current.temp_c >= 10 && current.temp_c < 20) {
    backgroundColor = 'bg-amber-300';
    gradientClass = 'from-amber-300 to-transparent';
  } else {
    backgroundColor = 'bg-orange-700';
    gradientClass = 'from-orange-700 to-transparent'; 
  }

  return (
    <Link to={`/Details/${location.name}`} className="weather-card-link">
    <div className={`weather-card ${backgroundColor} ${gradientClass}p-4 rounded-md shadow-md min-h-[200px]`}>
      <h2 className="text-xl font-semibold mb-2">{location.name}, {location.region}, {location.country}</h2>
      <div className="weather-details flex justify-between">
        <div className="flex items-center">
          <img src={`https:${current.condition.icon}`} alt={current.condition.text} className="w-10 h-10 mr-2" />
          <p className="text-lg">{current.condition.text}</p>
        </div>
        <div>
          <p className="text-lg">Temperature: {current.temp_c}°C</p>
          <p className="text-lg">Feels Like: {current.feelslike_c}°C</p>
          <p className="text-lg">Wind: {current.wind_kph} km/h, {current.wind_dir}</p>
          <p className="text-lg">Humidity: {current.humidity}%</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default WeatherCard;
