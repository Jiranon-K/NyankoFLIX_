import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'YOUR API KEY'
    },
  };

  const handlewheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/account/21763346/favorite/tv?language=th-TH&page=1&sort_by=created_at.asc',
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    const currentRef = cardsRef.current;
    currentRef.addEventListener('wheel', handlewheel);

    return () => {
      currentRef.removeEventListener('wheel', handlewheel);
    };
  }, []);

  return (
    <div className='titleCards'>
      <h2>{title ? title : 'Anime Tv Series'}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          apiData.map((card) => (
            <Link to={`/player/${card.id}`} className='card' key={card.id}>
              <img
                src={
                  card.backdrop_path
                    ? 'https://image.tmdb.org/t/p/w500' + card.backdrop_path
                    : '/path/to/placeholder-image.jpg'
                }
                alt={card.original_title || ''}
              />
              <p>{card.original_title || ''}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default TitleCards;
