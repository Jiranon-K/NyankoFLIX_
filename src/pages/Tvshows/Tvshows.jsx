import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import TitleCards from '../../component/TitleCards/TitleCards2';

const Tvshows = () => {
  return (
    <div className='tvshows'>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <TitleCards title="ยอดนิยม" category="1" />
        <TitleCards title="แนะนำ" category="2" />
        <TitleCards title="เรื่องที่คุณน่าจะชอบ" category="3" />
        <TitleCards title="เร็วๆ นี้..." category="4" />
      </div>
      <Footer />
    </div>
  );
};

export default Tvshows;