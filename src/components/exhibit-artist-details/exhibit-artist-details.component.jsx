import { useEffect, useState } from 'react';
import './exhibit-artist-details.styles.css';

//TODO: get rid of duplicates

function ExhibitArtistDetails({ artists }) {
  const [artistNames, setArtistNames] = useState(
    artists.map((artist) => artist.credit)
  );

  return (
    <div className={`exhibit-artist-details-container`}>
      <h3>About the Artists</h3>
      <p>{JSON.stringify(artistNames)}</p>
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
