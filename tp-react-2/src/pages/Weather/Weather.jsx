
import Footer from '../../components/Footer/Footer'

import Navbar from '../../components/Navbar/Navbar'
import WeatherForm from '../../components/WeatherForm/WeatherForm';

function Weather() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <WeatherForm />
      <Footer />
    </ div>
  );

}

export default Weather;