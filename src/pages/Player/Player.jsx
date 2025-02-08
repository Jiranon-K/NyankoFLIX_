import React, { useState, useEffect } from 'react';
import './Player.css';
import back_arrow from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';
import { options } from '../../services/api';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
  });

  useEffect(() => {
    console.log(`Fetching video data for TV show ID: ${id}`);
    fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=ja-JP`, options)
      .then((res) => res.json())
      .then((res) => {
        console.log('API response:', res);
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        } else {
          console.error('No video data found.');
          fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`, options)
            .then((res) => res.json())
            .then((res) => {
              if (res.results && res.results.length > 0) {
                setApiData(res.results[0]);
              } else {
                console.error('No video data found in fallback language.');
                setApiData({ name: 'No video available', key: '' });
              }
            })
            .catch((err) => console.error('Error fetching fallback video data:', err));
        }
      })
      .catch((err) => console.error('Error fetching video data:', err));
  }, [id]);

  return (
    <div className="player">
      <img
        src={back_arrow}
        alt="Back"
        onClick={() => {
          navigate(-1);
        }}
      />

      {apiData.key ? (
        <iframe
          width="100%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title={apiData.name || 'trailer'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>{apiData.name || 'Loading...'}</p>
      )}
    </div>
  );
};

export default Player;
