import './browse.styles.css';

import collections from '../../data/collections';
import BrowseGrid from '../../components/browse-grid/browse-grid.component';

const Browse = () => {
  return (
    <div>
      <h1>Browse</h1>
      <div></div>
      <div class="wrapper">
        {collections.map((collection) => {
          return <BrowseGrid collection={collection} />;
        })}
      </div>
    </div>
  );
};

export default Browse;
