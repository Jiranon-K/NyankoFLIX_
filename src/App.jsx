import React from 'react';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Player from './pages/Player/Player';
import PlayerMovie from './pages/Player/PlayerMovie';
import Tvshows from './pages/Tvshows/Tvshows';
import Movies from './pages/Movies/Movies';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='/movie/:id' element={<PlayerMovie />} />
        <Route path='/tvshows' element={<Tvshows />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </div>
  );
};

export default App;