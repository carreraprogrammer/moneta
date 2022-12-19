import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css'
import $ from 'jquery'
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);


  const handleNavigation = () => {
    $('.navigation').toggleClass('navigationActive')
    $('.burgerLine').toggleClass('burgerActive')
  }
  
  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const currentScrollPos = window.pageYOffset;

      const navbar = document.querySelector('.nav')

      // If the user is scrolling down and the navbar is not already hidden
      if (currentScrollPos > prevScrollPos && !navbar.classList.contains('navhidde')) {
        // Add the 'navhidde' class to hide the navbar
        navbar.classList.add('navhidde');
      }
      // If the user is scrolling up and the navbar is already hidden
      else if (currentScrollPos < prevScrollPos && navbar.classList.contains('navhidde')) {
        // Remove the 'navhidde' class to display the navbar
        navbar.classList.remove('navhidde');
      }

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add an event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [prevScrollPos]);
  
  return(
    <nav className='nav'>
      <ul className='navigation'>
        <NavLink to='/' onClick={handleNavigation}>Principal</NavLink>
        <NavLink to='/Coffee' onClick={handleNavigation}>Café</NavLink>
        <NavLink to='/Shop' onClick={handleNavigation}>Tienda</NavLink>
        <NavLink to='/About' onClick={handleNavigation}>About</NavLink>
      </ul>
      <div className='burgerMenu' onClick={handleNavigation}>
        <span className='burgerLine'></span>    
        <span className='burgerLine'></span>
        <span className='burgerLine'></span>
      </div>
    </nav>
  )
}


export default Navbar 