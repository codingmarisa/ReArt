import { useState } from 'react';
import './preview-slider.styles.css';

function PreviewSlider({ slides }) {
  const [items, setItems] = useState(slides.items.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(4);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex === 4) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="preview-image-slider-container">
      {currentIndex === 4 ? (
        <div>
          <p>View the Full Exhibit</p>
        </div>
      ) : (
        <div
          className="preview-slider-div"
          style={{
            backgroundImage: `url(${items[currentIndex].image})`,
          }}
        />
      )}
      <div
        className="preview-slider-arrow preview-left-arrow"
        onClick={previousSlide}
      >
        {'<'}
      </div>
      <div
        className="preview-slider-arrow preview-right-arrow"
        onClick={nextSlide}
      >
        {'>'}
      </div>
      <div className="preview-slider-dots-container">
        {items.map((item, itemIndex) => (
          <div
            className="preview-slider-dot"
            key={'slide' + itemIndex}
            onClick={() => goToSlide(itemIndex)}
          >
            +
          </div>
        ))}
        <div className="preview-slider-dot" onClick={() => goToSlide(4)}>
          +
        </div>
      </div>
    </div>
  );
}

export default PreviewSlider;
