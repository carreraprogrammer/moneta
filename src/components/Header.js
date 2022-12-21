import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
      AOS.init({duration: 3000})
  }, [])

  return(
    <header className='header' id='header' data-aos='fade-in' >
      <h1 
        id='headerTitle'  
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        >Moneta</h1>
    </header>
  )
}

export default Header