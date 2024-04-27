import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para cambiar a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para cambiar a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Efecto para cambiar automáticamente a la siguiente imagen cada cierto tiempo
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Cambia la imagen cada 5 segundos
    return () => clearInterval(interval);
  }, [nextImage]);

  const images = [
    '../../img/vinyls.jpg',
    'https://via.placeholder.com/800x400/00ff00',
    'https://via.placeholder.com/800x400/0000ff',
  ];

  return (
    <div className="relative">
      const imagenActual = images.map(image => {

        <img
          key={index}
          src={images}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
        />
      })
      {/* {images.map((images, index) => (
      ))} */}
      {/* Botón de retroceso */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-l-md focus:outline-none"
      >
        Prev
      </button>
      {/* Botón de avance */}
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-r-md focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
