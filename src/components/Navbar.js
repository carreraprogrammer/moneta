import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css'

const Navbar = () => {
  return(
    <nav>
      <NavLink to='/' id='logo'>LOGO</NavLink>
      <ul id='navigation'>
        <NavLink to='/Coffee'>Café</NavLink>
        <NavLink to='/Shop'>Tienda</NavLink>
        <NavLink to='/About'>About</NavLink>
      </ul>
      <div id='burgerMenu'>
        <span className='burgerLine'></span>    
        <span className='burgerLine'></span>
        <span className='burgerLine'></span>
      </div>
    </nav>
  )
}


export default Navbar 