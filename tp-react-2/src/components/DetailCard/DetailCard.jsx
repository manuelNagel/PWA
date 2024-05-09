
import React from 'react';

const DetailCard = ({ weatherData }) => {
  const { location, current } = weatherData;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden my-8">
    <div className="p-4">
      <h1 className="text-2xl underline font-semibold mb-2">Weather Details for {location.name}</h1>
      <div className="flex justify-between items-center border-b-2 pb-2">
        <p className="text-lg font-semibold">Temperature:</p>
        <p className="text-lg">{current.temp_c}°C</p>
      </div>
      <div className="flex justify-between items-center border-b-2 py-2">
        <p className="text-lg font-semibold">Feels Like:</p>
        <p className="text-lg">{current.feelslike_c}°C</p>
      </div>
      <div className="flex justify-between items-center border-b-2 py-2">
        <p className="text-lg font-semibold">Condition:</p>
        <p className="text-lg">{current.condition.text}</p>
      </div>
      <div className="flex justify-between items-center border-b-2 py-2">
        <p className="text-lg font-semibold">Wind:</p>
        <p className="text-lg">{current.wind_kph} km/h, {current.wind_dir}</p>
      </div>
      <div className="flex justify-between items-center border-b-2 py-2">
        <p className="text-lg font-semibold">Humidity:</p>
        <p className="text-lg">{current.humidity}%</p>
      </div>
      <div className="flex justify-between items-center border-b-2 py-2">
        <p className="text-lg font-semibold">Pressure:</p>
        <p className="text-lg">{current.pressure_mb} mb</p>
      </div>
      <div className="flex justify-between items-center border-b-2 py-2">
        <p className="text-lg font-semibold">Visibility:</p>
        <p className="text-lg">{current.vis_km} km</p>
      </div>
      <div className="flex justify-between items-center border-b-2 py-2">
        <p className="text-lg font-semibold">UV Index:</p>
        <p className="text-lg">{current.uv}</p>
      </div>
    </div>
  </div>
  );
};

export default DetailCard;