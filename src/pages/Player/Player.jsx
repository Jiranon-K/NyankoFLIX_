import React, { useState, useEffect } from 'react';
import './Player.css';
import back_arrow from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'YOUR API KEY',
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=ja-JP`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        } else {
          console.error('No video data found.');
        }
      })
      .catch((err) => console.error('Error fetching video data:', err));
  }, [id]);

  return (
    <div className="player">
      <img
        src={back_arrow}
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
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default Player;
