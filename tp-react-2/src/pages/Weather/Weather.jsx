
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import WeatherForm from '../../components/WeatherForm/WeatherForm';

function Weather() {

  const { city } = useParams()
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <WeatherForm city={city}/>
      <Footer />
    </ div>
  );

}

export default Weather;