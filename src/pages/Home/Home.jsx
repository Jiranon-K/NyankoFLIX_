import React from 'react'
import './Home.css'
import Navbar from '../../component/navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../component/TitleCards/TitleCards'
import Footer from '../../component/Footer/Footer'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>หลังจากใช้ชีวิตในฐานะพวกไร้งานแบบ NEET จนอายุ 34 ปี หนุ่มอ้วนท้วมถูกขับไล่ออกจากบ้าน 
            จนเกิดเหตุให้เขายอมสละชีวิตเพื่อช่วยวัยรุ่นสองคนที่กำลังจะถูกรถชน หลังตายการเกิดใหม่อีกครั้งในโลกต่างมิติ เขาได้เริ่มต้นชีวิตใหม่อีกครั้งในร่างของ รูเดียส เกรย์แรท
             และตั้งใจจะใช้ชีวิตให้ดียิ่งกว่าเดิม</p>
             <div className="hero-btns">
                <button className='btn' onClick={() => navigate('/player/94664')}>
                  <img src={play_icon} alt="" />
                  Play
                </button>
                <button className='btn dark-btn' onClick={() => window.open('https://mushokutensei.jp/', '_blank')}>
                  <img src={info_icon} alt="" />
                  More Info
                </button>
             </div>
             <TitleCards/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home