import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './exhibit.styles.css';

import collections from '../../data/collections';

const Exhibit = () => {
  const { exhibitUrl } = useParams();
  const [exhibit, setExhibit] = useState(null);
  const [singleArtist, setSingleArtist] = useState(true);
  const [artistsWithInfo, setArtistsWithInfo] = useState(null);

  useEffect(() => {
    for (const collection of collections) {
      if (collection.exhibitUrl === exhibitUrl) {
        setExhibit(collection);
        setSingleArtist(collection.singleArtist);
        // TODO: also exclude duplicate artists already in array
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
            <h1>{exhibit.title}</h1>
            {singleArtist ? (
              <>
                <h2>{exhibit.aboutSingleArtist.credit}</h2>
                <p>{exhibit.description}</p>
                <p>
                  <span>Learn more about the artist.</span>
                </p>
              </>
            ) : (
              <>
                <p>{exhibit.description}</p>
                <p>
                  <span>Learn more about the artists.</span>
                </p>
              </>
            )}
            <div>
              {exhibit.items.map((item, index) => {
                return (
                  <div key={exhibitUrl + index}>
                    <img src={item.image} alt={item.alt} />
                    <p>{item.title}</p>
                    <p>{item.credit}</p>
                  </div>
                );
              })}
            </div>
            <div>
              {exhibit.singleArtist ? (
                <>
                  <h3>About the Artist</h3>
                  <p>{exhibit.aboutSingleArtist.text}</p>
                </>
              ) : (
                <>
                  {/* TODO: update multi-artist collections to have single artist value to allow for exclusion of duplicates */}
                  {artistsWithInfo && (
                    <>
                      <h3>About the Artists</h3>
                      {artistsWithInfo &&
                        artistsWithInfo.map((artist, index) => {
                          return (
                            <div key={`artistInfo${index}`}>
                              <p>{artist.credit}</p>
                              <p>{artist.aboutArtist}</p>
                            </div>
                          );
                        })}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exhibit;
