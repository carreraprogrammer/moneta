import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css'
import $ from 'jquery'

const Navbar = () => {

  const handleNavigation = () => {
    $('.navigation').toggleClass('navigationActive')
    $('.burgerLine').toggleClass('burgerActive')
  }
  
  return(
    <nav>
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