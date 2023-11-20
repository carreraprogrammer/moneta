import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMobileScreen } from '../../customHooks/useIsMobile';
import mobileBg from '../../assets/Images/mobileMenuBg.webm'

gsap.registerPlugin(ScrollTrigger);

const Navbar: React.FC = () => {
  const isMobile = useMobileScreen();
  const navbarRef = useRef<HTMLElement | null>(null);
  const [navActive, setNavActive] = useState<boolean>(false);

  const handleNavigation = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    const nav = navbarRef.current;
  
    const showAnim = gsap.from(nav, {
      yPercent: -100,
      paused: true,
      duration: 0.2,
    }).progress(1);
  
   if (!isMobile) {
      ScrollTrigger.create({
        trigger: nav,
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });
    }
  }, []);
  
  return(
    <nav ref={navbarRef} className={`nav ${navActive ? 'navActive' : ''}`}>
      <ul className={`navigation ${navActive ? 'navigationActive' : ''}`}>
        <NavLink className='navigationLinks' to='/' onClick={handleNavigation}>Principal</NavLink>
        <NavLink className='navigationLinks' to='/Coffee' onClick={handleNavigation}>Café</NavLink>
        <NavLink className='navigationLinks' to='/shop' onClick={handleNavigation}>Tienda</NavLink>
        <NavLink className='navigationLinks' to='/About' onClick={handleNavigation}>About</NavLink>
        <video className='navVideo' autoPlay muted loop>
          <source src={mobileBg} type='video/webm' />
        </video>
      </ul>
      <div className='burgerMenu' onClick={handleNavigation}>
        <span className={`burgerLine ${navActive ? 'burgerActive' : ''}`}></span>    
        <span className={`burgerLine ${navActive ? 'burgerActive' : ''}`}></span>
        <span className={`burgerLine ${navActive ? 'burgerActive' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
