import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import TitleCards from '../../component/TitleCards/TitleCards'

const Tvshows = () => {
  return (
    <div className='tvshows'>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <TitleCards title="Action" />
        <TitleCards title="Romance" />
        <TitleCards title="Comedy" />
        <TitleCards title="Horror" />
      </div>
      <Footer />
    </div>
  )
}

export default Tvshows