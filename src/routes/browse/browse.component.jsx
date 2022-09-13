import './browse.styles.css';

import collections from '../../data/collections';

const Browse = () => {
  return (
    <div>
      <h1>Browse</h1>
      <div>
        {collections.map((collection) => {
          return <p>{collection.title}</p>;
        })}
      </div>
    </div>
  );
};

export default Browse;
