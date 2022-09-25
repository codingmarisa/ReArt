import { Link } from 'react-router-dom';
import { useState } from 'react';
import './preview-slider.styles.css';

function PreviewSlider({ slides }) {
  const [items, setItems] = useState(slides.items.slice(0, 5));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

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
          <div className="preview-slider-div">
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
            </div>
            <div className="preview-last-slide">
              <Link to={`browse/${slides.exhibitUrl}`}>
                <div className="preview-last-slide-text">
                  <p>View the Full Exhibit</p>
                  <div
                    className="preview-last-slide-img"
                    style={{
                      backgroundImage: `url(${items[4].image})`,
                    }}
                  />
                  <p>Available until December 21st</p>
                </div>
              </Link>
            </div>
            <div
              className="preview-slider-arrow preview-left-arrow"
              onClick={previousSlide}
            >
              &#9664;
            </div>
            <div
              className="preview-slider-arrow preview-right-arrow"
              onClick={nextSlide}
            >
              &#9654;
            </div>
          </div>
        ) : (
          <div className="preview-slider-div">
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
            </div>
            <img src={items[currentIndex].image} alt="" />
            <div
              className="preview-slider-arrow preview-left-arrow"
              onClick={previousSlide}
            >
              &#9664;
            </div>
            <div
              className="preview-slider-arrow preview-right-arrow"
              onClick={nextSlide}
            >
              &#9654;
            </div>
            <div className="preview-slider-details">
              <p className="preview-slider-details-title">
                {items[currentIndex].title}
              </p>
              {slides.singleArtist ? (
                <p className="preview-slider-details-credit">
                  {slides.aboutSingleArtist.credit}
                </p>
              ) : (
                <p className="preview-slider-details-credit">
                  {items[currentIndex].credit}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreviewSlider;
