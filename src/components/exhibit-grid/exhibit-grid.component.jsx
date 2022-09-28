import './exhibit-grid.styles.css';

function ExhibitGrid({ items }) {
  return (
    <div className={`exhibit-grid-box`}>
      {items.map((item, index) => {
        return (
          <div key={`exhibitGrid${index}`}>
            <img src={item.image} alt={item.alt} />
            <p>{item.title}</p>
            <p>{item.credit}</p>
          </div>
        );
      })}
    </div>
  );
}

// {/* <Link to={exhibitUrl}> */}
// <div className="exhibit-grid-image">
//   {/* <img src={items[0].image} alt={items[0].alt} /> */}
// </div>
// <div className="exhibit-grid-details">
//   <p>{items[0].title}</p>
// </div>
// {/* </Link> */}

export default ExhibitGrid;
