import React from 'react';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Player from './pages/Player/Player';
import TvShows from './pages/TvShows/TvShows';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='/tv-shows' element={<TvShows />} />
      </Routes>
    </div>
  );
};

export default App;