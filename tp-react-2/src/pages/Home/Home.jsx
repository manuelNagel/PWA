
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'

function Home()  {
  const navigate = useNavigate(); 

  const handleCityClick = (city) => {
    navigate(`/Weather/${city}`); 
  };
    return (
      <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Carousel handleCityClick={handleCityClick} />
      <Footer />
      </ div>
    );
  
}

export default Home