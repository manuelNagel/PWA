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
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${(location)}&key=a8e5776ae3fc426a863223719240105`);
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

  const splitArray = (array, size) => {
    const divArr = [];
    for (let i = 0; i < array.length; i += size) {
      divArr.push(array.slice(i, i + size));
    }
    return divArr;
  };

  const splitWeatherData = splitArray(weatherData, 4);

  
  return (
    <div className="container mx-auto px-4">
      <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Enter location..." className="mt-4 p-2 border border-gray-300 rounded-md w-full" />
      <button onClick={handleSearch} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Search</button>
      <div className="flex flex-wrap mt-4">
        {weatherData.map((weather, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4  p-1 rounded-md overflow-hidden">
            <div className="p-3 border border-gray-300 rounded-md">
              <WeatherCard location={weather.location} current={weather.current} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default WeatherForm;