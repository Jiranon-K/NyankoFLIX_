import React, { useEffect, useState } from 'react';
import './TvShows.css';
import Footer from '../../component/Footer/Footer';

const TvShows = () => {
  const [categories, setCategories] = useState({
    airingToday: [],
    onTheAir: [],
    popular: [],
    topRated: [],
    crime: [],
    comedy: [],
    documentary: []
  });

  const API_KEY = `Bearer ${API_KEY}`;
  const BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const [airingToday, onTheAir, popular, topRated] = await Promise.all([
          fetch(`${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US`),
          fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US`),
          fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US`),
          fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`)
        ]);

        const data = await Promise.all([
          airingToday.json(),
          onTheAir.json(),
          popular.json(),
          topRated.json()
        ]);

        setCategories({
          airingToday: data[0].results,
          onTheAir: data[1].results,
          popular: data[2].results,
          topRated: data[3].results
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTVShows();
  }, []);

  const TVShowCard = ({ show }) => (
    <div className="tv-card">
      <img 
        src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
        alt={show.name}
      />
      <div className="tv-card-info">
        <h3>{show.name}</h3>
        <p>{show.overview.substring(0, 100)}...</p>
        <div className="rating">★ {show.vote_average.toFixed(1)}</div>
      </div>
    </div>
  );

  const ShowRow = ({ title, shows }) => (
    <div className="show-row">
      <h2>{title}</h2>
      <div className="shows-slider">
        {shows.map(show => (
          <TVShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="tvshows-page">
      <div className="hero-section">
        <h1>TV Shows</h1>
      </div>
      <div className="shows-container">
        <ShowRow title="Airing Today" shows={categories.airingToday} />
        <ShowRow title="On The Air" shows={categories.onTheAir} />
        <ShowRow title="Popular Shows" shows={categories.popular} />
        <ShowRow title="Top Rated" shows={categories.topRated} />
      </div>
      <Footer />
    </div>
  );
};

export default TvShows;