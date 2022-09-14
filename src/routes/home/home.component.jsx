import { Link } from 'react-router-dom';

import './home.styles.css';

import PreviewSlider from '../../components/preview-slider/preview-slider.component';

import featuredCollection from '../../data/collection-fairy-tale';
import Footer from '../../components/footer/footer.component copy';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-featured-title">
          <h1>
            <Link to="">{featuredCollection.title}</Link>
          </h1>
          <p className="home-featured-quarter">
            Featured Exhibit for Fall Quarter
          </p>
          <p className="home-collection-description">
            {featuredCollection.description}
          </p>
          <p className="home-collection-link">
            <Link to="">&#10214; View Full Exhibit &#10215;</Link>
          </p>
        </div>
        <PreviewSlider slides={featuredCollection} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
