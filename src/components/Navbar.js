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
      <NavLink to='/' id='logo'>LOGO</NavLink>
      <ul className='navigation'>
        <NavLink to='/'>Principal</NavLink>
        <NavLink to='/Coffee'>Café</NavLink>
        <NavLink to='/Shop'>Tienda</NavLink>
        <NavLink to='/About'>About</NavLink>
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