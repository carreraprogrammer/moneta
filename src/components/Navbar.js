import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return(
    <nav>
      <NavLink to='/'>LOGO</NavLink>
      <ul id='navigation'>
        <NavLink to='/Coffee'>Café</NavLink>
        <NavLink to='/Shop'>Tienda</NavLink>
        <NavLink to='/About'>About</NavLink>
      </ul>
    </nav>
  )
}


export default Navbar 