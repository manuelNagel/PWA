import React, { useState, useEffect } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

const WeatherForm = () => {
  const initialLocations = [
    "Buenos Aires",
    "Neuquen",
    "New York",
    "Santiago",
    "Barcelona",
    "Berlin",
    "Madrid",
    "Villa La Angostura"
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const weatherPromises = initialLocations.map(async (location) => {
        try {
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${encodeURIComponent(location)}&key=a8e5776ae3fc426a863223719240105`);
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(`Error al conseguir la información para ${location}:`, error);
          return null;
        }
      });

      const results = await Promise.all(weatherPromises);
      setWeatherData(results.filter(data => data !== null));
    };

    fetchWeatherData();
  }, []);

  const handleSearch = async () => {
    if (!searchQuery) return;

    const existingLocation = weatherData.find(weather => weather.location.name.toLowerCase() === searchQuery.toLowerCase());
    if (existingLocation) {
      setSearchQuery('');
      return;
    }

    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${searchQuery}&key=a8e5776ae3fc426a863223719240105`);
      const data = await response.json();
      setWeatherData([data, ...weatherData]);
      setSearchQuery('');
    } catch (error) {
      console.error('Error al conseguir la información:', error);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Enter location..." />
      <button onClick={handleSearch}>Search</button>
      <div className="weather-cards">
        {weatherData.map((weather, index) => (
          <WeatherCard key={index} location={weather.location} current={weather.current} />
        ))}
      </div>
    </div>
  );
};

export default WeatherForm;