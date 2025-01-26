import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';


function Navbar() {  

  const NavRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

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
        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={showMenu ? 'show-menu' : ''}>
          <li><Link to="/">หน้าหลัก</Link></li>
          <li><Link to="/Tvshows">รายการทีวี</Link></li>
          <li><Link to="/movies">ภาพยนต์</Link></li>
          <li><Link to="/trending">มาใหม่และกำลังฮิต</Link></li>
          <li><Link to="/mylist">รายการของฉัน</Link></li>
          <li><Link to="/language">เลือกดูตามภาษา</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={bell_icon} alt="Notifications" className='icon' />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className='profile' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
