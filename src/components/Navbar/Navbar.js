import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef(null);
  const [navActive, setNavActive] = useState(false);

  const handleNavigation = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    gsap.to(navbarRef.current, {
      scrollTrigger: {
        trigger: navbarRef.current,
        start: "top top",
        end: "bottom top",
        toggleClass: { targets: navbarRef.current, className: "navhidde" },
        scrub: true
      }
    });
  }, []);
  
  return(
    <nav ref={navbarRef} className={`nav ${navActive ? 'navActive' : ''}`}>
      <ul className={`navigation ${navActive ? 'navigationActive' : ''}`}>
        <NavLink className='navigationLinks' to='/' onClick={handleNavigation}>Principal</NavLink>
        <NavLink className='navigationLinks' to='/Coffee' onClick={handleNavigation}>Café</NavLink>
        <NavLink className='navigationLinks' to='/Shop' onClick={handleNavigation}>Tienda</NavLink>
        <NavLink className='navigationLinks' to='/About' onClick={handleNavigation}>About</NavLink>
      </ul>
      <div className='burgerMenu' onClick={handleNavigation}>
        <span className={`burgerLine ${navActive ? 'burgerActive' : ''}`}></span>    
        <span className={`burgerLine ${navActive ? 'burgerActive' : ''}`}></span>
        <span className={`burgerLine ${navActive ? 'burgerActive' : ''}`}></span>
      </div>
    </nav>
  )
}

export default Navbar;
