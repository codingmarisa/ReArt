import './browse-container.styles.css';

import collections from '../../data/collections';
import BrowseGrid from '../../components/browse-grid/browse-grid.component';

const BrowseContainer = () => {
  return (
    <div>
      <h1 className="browse-container-title">Browse Exhibits</h1>
      <div className="grid-wrapper">
        {collections.map((collection, index) => {
          return (
            <BrowseGrid
              collection={collection}
              key={`browseContainer${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrowseContainer;
