import { useState } from 'react';
import arrow from '../../assets/images/carousel-arrow.png';

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  if (total === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === total - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? total - 1 : prev - 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`Logement ${currentIndex + 1}`}
        className="carousel__image"
      />

      {total > 1 && (
        <>
          <button
            className="carousel__arrow carousel__arrow--left"
            onClick={prevSlide}
          >
            <img src={arrow} alt="Précédent" />
          </button>

          <button
            className="carousel__arrow carousel__arrow--right"
            onClick={nextSlide}
          >
            <img src={arrow} alt="Suivant" />
          </button>

          <span className="carousel__counter">
            {currentIndex + 1} / {total}
          </span>
        </>
      )}
    </div>
  );
}

export default Carousel;
