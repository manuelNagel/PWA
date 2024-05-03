
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer'

import Navbar from '../../components/Navbar/Navbar'

function Home()  {
  
    return (
      <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Carousel />
      <Footer />
      </ div>
    );
  
}

export default Home