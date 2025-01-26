import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const [showControls, setShowControls] = useState(false);
  const cardsRef = useRef();

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };

  const handlewheel = (event) => {
    event.preventDefault();
    const scrollAmount = event.deltaY;
    const scrollSpeed = 2.5; 
    
    cardsRef.current.scrollLeft += scrollAmount * scrollSpeed;
  };

  const handleScroll = (direction) => {
    const scrollAmount = 400; 
    const container = cardsRef.current;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/account/21763346/favorite/tv?language=th-TH&page=1&sort_by=created_at.asc',
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results) {
          setApiData(res.results);
        } else {
          console.error('No results found.');
        }
      })
      .catch((err) => console.error(err));

    const currentRef = cardsRef.current;
    currentRef.addEventListener('wheel', handlewheel);

    return () => {
      currentRef.removeEventListener('wheel', handlewheel);
    };
  }, []);

  return (
    <div 
      className='titleCards'
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h2>{title ? title : 'Anime Tv Series'}</h2>
      <div className='slider-container'>
        <button 
          className={`slider-control left ${showControls ? 'show' : ''}`}
          onClick={() => handleScroll('left')}
        >
          ‹
        </button>
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
                  alt={card.original_title || card.name || ''}
                />
                <p>{card.original_title || card.name || ''}</p>
              </Link>
            ))
          )}
        </div>
        <button 
          className={`slider-control right ${showControls ? 'show' : ''}`}
          onClick={() => handleScroll('right')}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default TitleCards;
