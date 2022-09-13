import './home.styles.css';

import PreviewSlider from '../../components/preview-slider/preview-slider.component';

import featuredCollection from '../../data/collection-fairy-tale';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-gallery-container">
        <div className={`home-featured-title`}>
          <h1>Featured Exhibit</h1>
          <h2>{featuredCollection.title}</h2>
        </div>

        <div className="home-slider-container">
          <PreviewSlider slides={featuredCollection} />
        </div>

        <div>
          <p>View Collection</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
