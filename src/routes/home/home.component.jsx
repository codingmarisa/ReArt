import './home.styles.css';

import PreviewSlider from '../../components/preview-slider/preview-slider.component';

import featuredCollection from '../../data/collection-fairy-tale';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-featured-title">
        <h1>Featured Exhibit</h1>
        <h2>{featuredCollection.title}</h2>
      </div>
      <PreviewSlider slides={featuredCollection} />
    </div>
  );
};

export default Home;
