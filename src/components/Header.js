import front from '../resources/Images/parallaxOne.svg'

const Header = () => {
  return(
    <header className='header'>
      <h1 id='headerTitle'>MONETA</h1>
      <img id='frontImage' src={front} />
    </header>
  )
}

export default Header