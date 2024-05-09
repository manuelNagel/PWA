import React, { useState } from 'react';
import img1 from '../../img/Neuquen.jpg';
import img2 from '../../img/Barcelona.jpg';
import img3 from '../../img/Cordoba.jpg';
import img4 from '../../img/Berlin.jpg';

const Carousel = ({ handleCityClick }) => {
  const imagesWithDescriptions = [
    { image: img1, description: 'NEUQUEN' },
    { image: img2, description: 'BARCELONA' },
    { image: img3, description: 'CORDOBA' },
    { image: img4, description: 'BERLIN' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesWithDescriptions.length) % imagesWithDescriptions.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesWithDescriptions.length);
  };

  const handleImageClick = (description) => {
    const city = description.toLowerCase(); 
    handleCityClick(city); 
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imagesWithDescriptions.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full relative">
              <img src={item.image} alt={`Image ${index}`} className='w-full h-screen object-cover' 
              />
              {index === currentIndex && (
                <div onClick={() => handleImageClick(item.description)} className="absolute top-1/2 left-1/2 rounded-3xl transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-5xl  font-bold text-5xl"
                style={{ backdropFilter: 'blur(10px)' }}>
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrevClick}
        >
          Prev
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;