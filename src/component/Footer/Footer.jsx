import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>คำอธิบายเสียง</li>
        <li>ศูนย์ช่วยเหลือ</li>
        <li>บัตรของขวัญ</li>
        <li>ศูนย์สื่อมวลชน</li>
        <li>นักลงทุนสัมพันธ์</li>
        <li>ตำแหน่งงาน</li>
        <li>ข้อกำหนดการใช้งาน</li>
        <li>ความเป็นส่วนตัว</li>
        <li>ประกาศแจ้งทางกฎหมาย</li>
        <li>การตั้งค่าคุกกี้</li>
        <li>ข้อมูลบริษัท</li>
        <li>ติดต่อเรา</li>
      </ul>
      <p className='copyright-text'>© 2025 Nyankoflix, Inc.</p>
    </div>
  )
}

export default Footer