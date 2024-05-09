import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import DetailCard from '../../components/DetailCard/DetailCard'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

const Details = () => {
  const [weatherData, setWeatherData] = useState(null);
  const { city } = useParams(); 

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=a8e5776ae3fc426a863223719240105`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error al conseguir la información:', error);
      }
    };

    fetchWeatherData();
  }, [city]);

    return (
        <div className='flex flex-col min-h-screen'>
        <Navbar />
        {weatherData && <DetailCard weatherData={weatherData} />}
        <Footer />
        </ div>
      );
}

export default Details;