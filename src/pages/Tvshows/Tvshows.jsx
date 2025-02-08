import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import TitleCards from '../../component/TitleCards/TitleCards2';

const Tvshows = () => {
  return (
    <div className='tvshows'>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <TitleCards title="Action" category="Action" />
        <TitleCards title="Romance" category="Romance" />
        <TitleCards title="Comedy" category="Comedy" />
        <TitleCards title="Coming soon..." category="Horror" />
      </div>
      <Footer />
    </div>
  );
};

export default Tvshows;