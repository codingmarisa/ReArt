import { Link } from 'react-router-dom';
import './browse-grid.styles.css';

function BrowseGrid({ collection }) {
  const { title, exhibitUrl, items } = collection;

  return (
    <div className={`browse-grid-box`}>
      <Link to={exhibitUrl}>
        <div className="browse-grid-image">
          <img src={items[0].image} alt={items[0].alt} />
        </div>
        <div className="browse-grid-details">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}

export default BrowseGrid;
