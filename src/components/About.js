import React, { useState, useEffect } from 'react';
import { fetchSpotifyInfo } from '../data/firebase-storage';

export default function AboutMe() {
    const [topArtists, setTopArtists] = useState([]);

    useEffect( () => {
        async function fetchArtists() {
          let artists = await fetchSpotifyInfo();
          setTopArtists(artists);
        }
  
        fetchArtists();
      }, []);

    return (
        <div>
            <h2>🤝 Intro</h2>
            <p>Hello! I'm a California transplant, currently living in Seattle working at AWS on the Kinesis Data Streams team. I am interested in building systems that can generate, stream, and ingest real-time data to train AI models. You can check out some of my personal projects at my Github.</p>
            <p>Outside of work, I like to play chess, basketball, and recently started picking up pixel art and music production as a hobby. You can see some samples I've made in the Pixel Art Gallery below.</p>

            <div className="SpotifyInfo">
                <h3>Top Artists</h3>
                <ul>
                  {getArtistListItem(topArtists)}
                </ul>
            </div>
        </div>
    )
}

function getArtistListItem(artists) {
    let cells = artists.map((artist) => (
      <li>{artist}</li>
    ));
  
    return cells;
  }