import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './exhibit.styles.css';

import collections from '../../data/collections';

import ExhibitDetails from '../../components/exhibit-details/exhibit-details.component';
import ExhibitGrid from '../../components/exhibit-grid/exhibit-grid.component';
import ExhibitArtistDetails from '../../components/exhibit-artist-details/exhibit-artist-details.component';

const Exhibit = () => {
  const { exhibitUrl } = useParams();
  const [exhibit, setExhibit] = useState(null);
  const [artistsWithInfo, setArtistsWithInfo] = useState(null);

  useEffect(() => {
    for (const collection of collections) {
      if (collection.exhibitUrl === exhibitUrl) {
        setExhibit(collection);
        setArtistsWithInfo(
          collection.items.filter((item) => item.credit && item.aboutArtist)
        );
        break;
      }
    }
  }, [exhibitUrl, exhibit]);

  return (
    <div>
      <div>
        {exhibit && (
          <div>
            <ExhibitDetails
              title={exhibit.title}
              exhibitDetails={exhibit.exhibitDetails}
            />
            <ExhibitGrid items={exhibit.items} />
            {exhibit.exhibitDetails.singleArtist && artistsWithInfo ? (
              <></>
            ) : (
              <ExhibitArtistDetails artists={artistsWithInfo} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exhibit;
