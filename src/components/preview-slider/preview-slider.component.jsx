import { useState } from 'react';
import './preview-slider.styles.css';

function PreviewSlider({ slides }) {
  const [items, setItems] = useState(slides.items.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDot, setActiveDot] = useState();

  const lastSlide = {
    title: 'View the Full Exhibit',
    details: 'details go here',
  };

  const previousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(4);
      setActiveDot(4);
    } else {
      setCurrentIndex(currentIndex - 1);
      setActiveDot(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex === 4) {
      setCurrentIndex(0);
      setActiveDot(0);
    } else {
      setCurrentIndex(currentIndex + 1);
      setActiveDot(currentIndex + 1);
    }
  };

  const dotClickHandler = (slideIndex) => {
    goToSlide(slideIndex);
    setActiveDot(slideIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="preview-image-slider-container">
      <div>
        {currentIndex === 4 ? (
          <div className="preview-last-slide">
            <p>{lastSlide.title}</p>
            <p>{lastSlide.details}</p>
          </div>
        ) : (
          <div
            className="preview-slider-div"
            style={{
              backgroundImage: `url(${items[currentIndex].image})`,
            }}
          >
            <div className="preview-slider-details">
              <p>{items[currentIndex].title}</p>
              {slides.singleArtist ? (
                <p>{slides.aboutSingleArtist.credit}</p>
              ) : (
                <p>{items[currentIndex].credit}</p>
              )}
            </div>
          </div>
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
      </div>
      <div className="preview-slider-dots-container">
        {items.map((item, itemIndex) => (
          <div
            className={
              activeDot === itemIndex
                ? 'preview-slider-dot preview-active-dot'
                : 'preview-slider-dot'
            }
            id={`dot${itemIndex}`}
            key={'slide' + itemIndex}
            onClick={() => dotClickHandler(itemIndex)}
          >
            &#9679;
          </div>
        ))}
        <div
          className={
            activeDot === 4
              ? 'preview-slider-dot preview-active-dot'
              : 'preview-slider-dot'
          }
          id="dot4"
          onClick={() => dotClickHandler(4)}
        >
          &#9679;
        </div>
      </div>
    </div>
  );
}

export default PreviewSlider;
