import './exhibit-artist-details.styles.css';

//TODO: get rid of duplicates

function ExhibitArtistDetails({ artists }) {
  // useEffect(() => {
  //   //  }
  // }, [artists]);

  // function isExistingArtist(artist) {
  //   return uniqueArtists.includes(artist);
  // }

  return (
    <div className={`exhibit-artist-details-container`}>
      <h3>About the Artists</h3>
      {artists.map((artist, index) => {
        return (
          <div key={`artistInfo${index}`}>
            <p>{artist.credit}</p>
            <p>{artist.aboutArtist}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ExhibitArtistDetails;
