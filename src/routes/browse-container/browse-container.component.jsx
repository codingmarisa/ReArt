import './browse-container.styles.css';

import collections from '../../data/collections';
import BrowseGrid from '../../components/browse-grid/browse-grid.component';

const BrowseContainer = () => {
  return (
    <div>
      <h1 className="container-title">Browse Exhibits</h1>
      <div class="grid-wrapper">
        {collections.map((collection, index) => {
          return <BrowseGrid collection={collection} />;
        })}
      </div>
    </div>
  );
};

export default BrowseContainer;
