import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const LoadingSkeleton = () => (
  <div className="card loading-skeleton">
    <div className="skeleton-animate"></div>
  </div>
);

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
    const scrollAmount = 300; 
    const container = cardsRef.current;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    let apiUrl = '';
    switch (category) {
      case 'Action':
        apiUrl = 'https://api.themoviedb.org/3/discover/tv?with_genres=10759&language=ja-JP&with_original_language=ja&page=1';
        break;
      case 'Romance':
        apiUrl = 'https://api.themoviedb.org/3/discover/tv?with_genres=10749&language=ja-JP&with_original_language=ja&page=1';
        break;
      case 'Comedy':
        apiUrl = 'https://api.themoviedb.org/3/discover/tv?with_genres=35&language=ja-JP&with_original_language=ja&page=1';
        break;
      case 'Horror':
        apiUrl = 'https://api.themoviedb.org/3/discover/tv?with_genres=27&language=ja-JP&with_original_language=ja&page=1';
        break;
      default:
        apiUrl = 'https://api.themoviedb.org/3/discover/tv?language=ja-JP&with_original_language=ja&page=1';
    }

    fetch(apiUrl, options)
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
  }, [category]);

  return (
    <div 
      className='titleCards'
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h2>{title || 'Anime Series'}</h2>
      <div className='slider-container'>
        {showControls && (
          <>
            <button 
              className="slider-control left"
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
            >
              ‹
            </button>
            <button 
              className="slider-control right"
              onClick={() => handleScroll('right')}
              aria-label="Scroll right"
            >
              ›
            </button>
          </>
        )}
        <div className='card-list' ref={cardsRef}>
          {apiData.length === 0 
            ? Array(6).fill(0).map((_, i) => <LoadingSkeleton key={i} />)
            : apiData.map((card) => (
                <Link 
                  to={`/player/${card.id}`} 
                  className='card' 
                  key={card.id}
                  title={card.original_title || card.name}
                >
                  <img
                    src={card.backdrop_path 
                      ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
                      : '/path/to/placeholder-image.jpg'}
                    alt={card.original_title || card.name || ''}
                    loading="lazy"
                  />
                  <p>{card.original_title || card.name || ''}</p>
                </Link>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default TitleCards;
