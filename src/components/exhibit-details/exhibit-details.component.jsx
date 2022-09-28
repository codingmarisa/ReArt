import './exhibit-details.styles.css';

function ExhibitDetails({ title, exhibitDetails }) {
  return (
    <div className={`exhibit-details-container`}>
      <h1>{title}</h1>
      {exhibitDetails.singleArtist ? (
        <>
          <h2>{exhibitDetails.aboutSingleArtist.credit}</h2>
          <p>{exhibitDetails.description}</p>
          <p>
            <span>Learn more about the artist.</span>
          </p>
        </>
      ) : (
        <>
          <p>{exhibitDetails.description}</p>
          <p>
            <span>Learn more about the artists.</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ExhibitDetails;
