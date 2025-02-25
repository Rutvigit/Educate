import React, { useEffect, useState } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/logo.png'
import menuicon from '../../assets/menu-icon.png'


const Navbar = () => {
  
  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
       <img src={logo} alt="" className='logo'></img>

       <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-310} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-190} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-220} duration={500} className='btn'>Contact us</Link></li>
       </ul>
       <img src={menuicon} alt='no icon' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
