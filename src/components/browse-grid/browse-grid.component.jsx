import { useState } from 'react';
import './browse-grid.styles.css';

function BrowseGrid({ collection }) {
  const { title, items } = collection;

  return (
    <div className="browse-grid-box">
      <img src={items[0].image} alt={items[0].alt} />
      <div className="browse-grid-details">
        <p className="browse-grid-details-title">{title}</p>
      </div>
    </div>
  );
}

export default BrowseGrid;
