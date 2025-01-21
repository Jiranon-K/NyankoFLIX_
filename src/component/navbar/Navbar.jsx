import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg'; 
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';


function Navbar() {  

  const NavRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        NavRef.current.classList.add('nav-dark');  
      } else {
        NavRef.current.classList.remove('nav-dark');  
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={NavRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" className='icon' />
        <ul>
          <li>หน้าหลัก</li>
          <li>รายการทีวี</li>
          <li>ภาพยนต์</li>
          <li>มาใหม่และกำลังฮิต</li>
          <li>รายการของฉัน</li>
          <li>เลือกดูตามภาษา</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" className='icon' /> 
        <img src={bell_icon} alt="Notifications" className='icon' />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className='profile' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;  
