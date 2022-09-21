import { useState } from 'react';
import './browse-grid.styles.css';

function BrowseGrid({ collection, index }) {
  const { title, items } = collection;

  return (
    <div className={`browse-grid-box box-${index}`}>
      <div className="browse-grid-image">
        <img src={items[0].image} alt={items[0].alt} />
      </div>
      <div className="browse-grid-details">{title}</div>
    </div>
  );
}

export default BrowseGrid;
